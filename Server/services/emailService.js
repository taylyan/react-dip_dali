import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
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

export { sendEmail };