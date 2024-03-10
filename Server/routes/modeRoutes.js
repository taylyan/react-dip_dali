import express from 'express'
const router = express.Router();
//import { sendEmail, scheduleEmails } from '../services/emailService.js'; // Your email service for sending notifications
import { User } from '../models/User.js';
import axios from "axios";
import nodemailer from 'nodemailer'
import cron from 'node-cron'
import {verifyUser} from './auth.js'

//const userId = '65e4e4f2a5c1da38b3e483ed'
//const email = "taylyan.takev@gmail.com"
/*
const getEmailRecipients = async (userId ) => {
    try {
        const user = await User.findById(userId).select('email');
        if (!user) {
            console.error('User not found with ID:', userId);
            return [];
        }
        return [user.email]; // Return an array of email addresses
    } catch (error) {
        console.error('Error fetching recipients:', error);
        return []; // Return an empty array or handle the error appropriately
    }
};
*/

// POST route to handle mode selection
router.post('/mode-selection', async (req, res) => {
    const { mode } = req.body;
    console.log('stiga1')
    const recipients = ["taylyan.takev@gmail.com"] ;
    res.json({ message: `Mode  activated. No action taken.` });

    sendEmail(recipients, 'Test Email', '<p>This is a test email.</p>');
    try {
        console.log('stiga')
        const userId = '65e4e4f2a5c1da38b3e483ed' ;
        const userEmail = req.user.email ;
        
        //const { mode } = req.body;

        switch (mode) {
            case "Don't Disturb":
                //const recipients = await getEmailRecipients(userId); // Fetch recipients
                const recipients = ["taylyan.takev@gmail.com"] ;
                // Log retrieved recipients' email addresses
                console.log('Retrieved recipients:', recipients);

                // Send email
                sendEmail(recipients, 'Test Email', '<p>This is a test email.</p>');

                res.json({ message: `Mode ${mode} activated. No action taken.` });
                break;
            case "Balanced":
                // Set up cron job to send emails every 5 hours
                //scheduleEmails('0 */5 * * *', 'Balanced');
                res.json({ message: `Mode ${mode} activated. Emails will be sent every 5 hours.` });
                break;
            case "Active":
                // Set up cron job to send emails every hour
                //scheduleEmails('*/10 * * * *', 'Active');
                res.json({ message: `Mode ${mode} activated. Emails will be sent every hour.` });
                break;
            default:
                res.status(400).json({ message: `Invalid mode: ${mode}` });
        }
    } catch (error) {
        console.error('Error handling mode selection:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//emailService
/*
const transporter = nodemailer.createTransport({
    //host: 'smtp.gmail.com',
    //port: 587,
    service: 'gmail',
    auth: {
        user: 'taylyanprotection@gmail.com',
        pass: 'gnrt cxix kibh axol'
    }
});
*/
//transporter.verify().then(console.log).catch(console.error);

const sendEmail = (to, subject, html) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'taylyanprotection@gmail.com',
            pass: 'gnrt cxix kibh axol'
        }
    
    /*
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'taylyanprotection@gmail.com',
            pass: 'gnrt cxix kibh axol'
        }
        */
    });
    transporter.verify().then(console.log).catch(console.error);
    
    const mailOptions = {
        from: 'taylyanprotection@gmail.com',
        to: 'taylyan.takev@gmail.com',
        subject: subject,
        html: html
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

/*
const sendScheduledEmails = async () => {
    const recipients = await getEmailRecipients(req.user._id);

    if (recipients.length === 0) {
        console.log('No recipients found. Skipping email sending.');
        return;
    }

    recipients.forEach((recipient) => {
        sendEmail(recipient, 'Your Email Subject', 'Your Email Content');
    });
};
*/
/*
// Schedule the task based on the selected mode
const scheduleEmails = (mode) => {
    switch (mode) {
        case "Don't Disturb":
            // No email sending in this mode
            break;
        case "Balanced":
            // Schedule emails every 5 hours
            /cron.schedule('0 * /5 * * *', sendScheduledEmails);
            break;
        case "Active":
            // Schedule emails every hour
            cron.schedule('* /10 * * * *', sendScheduledEmails);
            break;
        default:
            console.error(`Invalid mode: ${mode}`);
    }
};
*/
export {router as emailRouter}