const aws = require('aws-sdk');
const nanoid = require('nanoid');
const config = require('../../config');

aws.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: 'us-east-1',
  signatureVersion: 'v4',
});

const s3 = new aws.S3();

const getS3Path = s3Key => encodeURI(`${config.aws.s3RootPath}/${s3Key}`);

const getAvatarS3Key = (roomName, name) => `${roomName}/avatars/${name}.jpg`;

const getFileS3Key = (roomName, filename) => `${roomName}/files/${nanoid()}${filename}`;

const getAvatarS3Path = (roomName, name) => getS3Path(getAvatarS3Key(roomName, name));

const uploadAvatarToS3AndGetUrl = async (fileStream, roomName, name) => {
  console.log('going to upload avatar', name);
  const key = getAvatarS3Key(roomName, name);

  await s3.putObject({
    Bucket: config.aws.bucket,
    Key: key,
    Body: fileStream,
    ContentType: '',
  }).promise();

  const s3Path = getS3Path(key);
  console.log('upload avatar success', s3Path);
  return s3Path;
};

/**
 * @param contactsInRoom {Array} wechaty contact obj arr
 */
const prepareAvatars = async (roomName, contactsInRoom) => {
  // 1. list objects inavatar folder
  // 2. compare with usernames, upload unexisted avatars
  const data = await s3.listObjectsV2({
    Bucket: config.aws.bucket,
    Prefix: `${roomName}/avatars/`,
  }).promise();

  const currentAvatarKeys = data.Contents.map(Content => Content.Key);
  console.log('current avatars keys', currentAvatarKeys);

  contactsInRoom.forEach(async (contact) => {
    const username = contact.name();
    const avatarKey = getAvatarS3Key(roomName, username);
    console.log('generated avatarkey', avatarKey);
    if (!currentAvatarKeys.includes(avatarKey)) {
      const contactAvatarFileBox = await contact.avatar();
      const contactAvatarBuffer = await contactAvatarFileBox.toBuffer();
      uploadAvatarToS3AndGetUrl(contactAvatarBuffer, roomName, username);
    }
  });
};

const uploadToS3AndGetUrl = async (fileStream, roomName, filename) => {
  console.log('going to upload file', filename);
  const key = getFileS3Key(roomName, filename);
  await s3.putObject({
    Bucket: config.aws.bucket,
    Key: key,
    Body: fileStream,
    ContentType: '',
  }).promise();

  const s3Path = getS3Path(key);
  console.log('upload file success', s3Path);
  return s3Path;
};

module.exports = {
  prepareAvatars,
  getAvatarS3Path,
  uploadToS3AndGetUrl,
};
