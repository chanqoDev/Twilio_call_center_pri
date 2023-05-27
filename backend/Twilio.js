const twilio = require("twilio");
const config = require("./config");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

class Twilio {
  phoneNumber = config.phoneNumber;
  phoneNumberSID = config.phoneNumberSID;
  tokenSid = config.tokenSid;
  verify = config.verify;

  constructor(accountSid, authToken) {
    this.accountSid = accountSid;
    this.authToken = authToken;
    this.client = require("twilio")(this.accountSid, this.authToken);
  }

  getTwilio() {
    this.client;
  }

  async sendVerify(to, channel) {
    const data = await this.client.verify.v2
      .services(this.verify)
      .verifications.create({ to: process.env.MOBILE_CELL, channel: "sms" });
    console.log("sendVerify", data);
    return data;
  }

  async verifyCodeAsync(to, code) {
    const data = await this.client.verify.v2
      .services(this.verify)
      .verificationChecks.create({ to: process.env.MOBILE_CELL, code: code });
    console.log("verifyCode", data);
    return data;
  }
}

const instance = new Twilio();
Object.freeze(instance);

module.exports = instance;
