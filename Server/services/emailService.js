import nodemailer from 'nodemailer'
import cron from 'node-cron'
import { getEmailRecipients } from '../routes/modeRoutes.js'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'taylyanprotection@gmail.com',
        pass: 'taylansecurity2024'
    }
});

const sendEmail = (to, subject, html) => {
    const mailOptions = {
        from: 'taylyanprotection@gmail.com',
        to: to,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

const sendScheduledEmails = () => {
    const recipients = getEmailRecipients();

    if (recipients.length === 0) {
        console.log('No recipients found. Skipping email sending.');
        return;
    }
    
    recipients.forEach((recipient) => {
        sendEmail(recipient, 'Your Email Subject', 'Your Email Content');
    });
};

// Schedule the task based on the selected mode
const scheduleEmails = (mode) => {
    switch (mode) {
        case "Don't Disturb":
            // No email sending in this mode
            break;
        case "Balanced":
            // Schedule emails every 5 hours
            cron.schedule('0 */5 * * *', sendScheduledEmails);
            break;
        case "Active":
            // Schedule emails every hour
            cron.schedule('*/10 * * * *', sendScheduledEmails);
            break;
        default:
            console.error(`Invalid mode: ${mode}`);
    }
};
export { sendEmail,scheduleEmails };