import express from 'express'
const router = express.Router();
import { sendEmail, scheduleEmails } from '../services/emailService.js'; // Your email service for sending notifications
import { User } from '../models/User.js';
import axios from "axios";

const getEmailRecipients = async () => {
    try {
        const recipients = await User.findById(req.user._id).select('email');

        // Return the email address as an array
        return [recipients.email];
        //return recipients.map(user => user.email);
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
                const recipients = await getEmailRecipients(); // Fetch recipients

                sendEmail(recipients, 'Test Email', '<p>This is a test email.</p>'); // Send email

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