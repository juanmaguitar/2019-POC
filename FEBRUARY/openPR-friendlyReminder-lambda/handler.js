'use strict';

const notify = require('./notify');

exports.launch = async (event, context, callback) => {
  await notify();
  console.log("Notifying to Slack...");
  callback(null);
};