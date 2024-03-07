import express from 'express'
const router = express.Router();
import { sendEmail } from '../services/emailService.js'; // Your email service for sending notifications
import {scheduleEmails } from '../cronjobs/emailScheduler.js'
import { User } from '../models/User.js';

const getEmailRecipients = async () => {
    try {
        // Fetch users who have opted in to receive emails, or based on other criteria
        const recipients = await User.find().select('email');

        // Extract email addresses from the user objects and return them as an array
        return recipients.map(user => user.email);
    } catch (error) {
        console.error('Error fetching recipients:', error);
        return []; // Return an empty array or handle the error appropriately
    }
};

// POST route to handle mode selection
router.post('/mode-selection', async (req, res) => {
    try {
        const { mode } = req.body;

        switch (mode) {
            case "Don't Disturb":
                // No action needed
                res.json({ message: `Mode ${mode} activated. No action taken.` });
                break;
            case "Balanced":
                // Set up cron job to send emails every 5 hours
                scheduleEmails('0 */5 * * *', 'Balanced');
                res.json({ message: `Mode ${mode} activated. Emails will be sent every 5 hours.` });
                break;
            case "Active":
                // Set up cron job to send emails every hour
                scheduleEmails('0 * * * *', 'Active');
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

export {router as emailRouter, getEmailRecipients}