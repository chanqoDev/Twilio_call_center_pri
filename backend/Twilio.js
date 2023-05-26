const twilio = require("twilio");
const config = require("./config");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

class Twilio {
  phoneNumber = config.phoneNumber;
  phoneNumberSID = config.phoneNumberSID;
  tokenSid = config.tokenSid;
  verify = config.verify;

  client = require("twilio")(accountSid, authToken);

  constructor() {
    // this.client = twilio(this.tokenSid, this.authToken, {
    //   accountSid: this.accountSid,
    // });
  }
  getTwilio() {
    this.client;
  }

  async sendVerify(to, channel) {
    const data = await this.client.verify.v2
      .services(this.verify)
      .verifications.create({ to: "to Phone number", channel: "sms" })
      .then((verification) => console.log(verification.sid));
    console.log("sendVerify", data);
    return data;
  }
}

const instance = new Twilio();
Object.freeze(instance);

module.exports = instance;
