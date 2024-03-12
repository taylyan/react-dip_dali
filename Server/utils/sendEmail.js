import express from 'express'
import dotenv from 'dotenv'
import mg from 'mailgun-js'
//const mg = require('mailgun-js');

dotenv.config();

const Mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });


export {Mailgun}
