const AWS = require('aws-sdk');
const secret = require('../../secret.json');


const awsConfig = {
  region: 'us-east-1',
  endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
  accessKeyId: secret.aws.accessKeyId,
  secretAccessKey: secret.aws.secretAccessKey,
  signatureVersion: 'v4',
};

AWS.config.update(awsConfig);

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
  dynamodb,
  docClient,
};
