const {
  phoneNumber,
  phoneNumberSid,
  tokenSid,
  tokenSecret,
  accountSid,
  verify,
} = require("./config");

console.log(phoneNumber);

class Twilio {
  client;
  phoneNumberSid = phoneNumberSid;
  tokenSid = tokenSid;
  tokenSecret = tokenSecret;
  accountSid = accountSid;
  verify = verify;

  constructor(accountSid, tokenSecret) {
    this.client = require("twilio")(this.accountSid, this.tokenSecret);
  }
}

const instance = new Twilio();
Object.freeze(instance);
module.exports = instance;
