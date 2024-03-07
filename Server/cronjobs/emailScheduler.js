import cron from 'node-cron'
const { sendEmail } = require('../services/emailService');

// Function to send emails
const sendScheduledEmails = () => {
    // Logic to fetch users and construct email content
    // For demonstration purposes, let's assume you have a function getEmailRecipients() that returns an array of user emails
    const recipients = getEmailRecipients();

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
            cron.schedule('0 * * * *', sendScheduledEmails);
            break;
        default:
            console.error(`Invalid mode: ${mode}`);
    }
};

export { scheduleEmails };