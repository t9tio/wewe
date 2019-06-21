const isEmail = require('validator/lib/isEmail');
const isURL = require('validator/lib/isURL');
// const { knownGroups } = require('../config');
// TODO: validate groupName & date

/**
 * Validate if member info format is correct
 * @return {success, msg}
 */
function memberInfo({
  name, email, url, intro, groupName, date,
}) {
  if (!name || !email || !intro) {
    return {
      success: false,
      msg: 'name; email; intro is required',
    };
  }
  if (!isEmail(email)) {
    return {
      success: false,
      msg: 'Please input a valid email address',
    };
  }
  if (url && !isURL(url)) {
    return {
      success: false,
      msg: 'Not a valid URL, forget http(s):// ?',
    };
  }

  // if (groupName && !knownGroups.includes(groupName)) {
  //   return {
  //     success: false,
  //     msg: 'Group did not exist',
  //   };
  // }
  return {
    success: true,
  };
}

module.exports = {
  memberInfo,
};
