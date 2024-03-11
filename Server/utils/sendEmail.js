//const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer'
import Transport from "nodemailer-brevo-transport"

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  const transporter = nodemailer.createTransport(
    new Transport({ apiKey: "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" })
  );

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

//module.exports = sendEmail;
export {sendEmail}
