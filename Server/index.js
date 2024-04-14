import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { userRouter } from './routes/user.js'
import { deviceRouter } from './routes/device.js'
//import { emailRouter } from './routes/modeRoutes.js'
import { Device } from './models/Device.js'
import { User } from './models/User.js'
import { Admin } from './models/Admin.js'
import { Mailgun } from './utils/sendEmail.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['https://react-dip-dali-front.onrender.com'],
    credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }));

dotenv.config()
app.use('/auth', AdminRouter)
app.use('/user', userRouter)
app.use('/device', deviceRouter)


//app.use('/email', emailRouter)
/*
app.post("/api/sendemail", async (req, res) => {
    const { email } = req.body;

    try {
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        const subject = "Thank You Message From NodeCourse";
        const message = `
          <h3>Hello Zino</h3>
          <p>Thank for your YouTube Tutorials</p>
          <p>Regards...</p>
      `;

        await sendEmail(subject, message, send_to, sent_from, reply_to);
        res.status(200).json({ success: true, message: "Email Sent" });
    } catch (error) {
        res.status(500).json(error.message);
    }
});
*/

app.post('/api/email', (req, res) => {
    const { email, subject, message } = req.body;
    Mailgun()
      .messages()
      .send(
        {
          from: 'John Doe <taylyanprotection@gmail.com>',
          to: `${email}`,
          subject: `${subject}`,
          html: `<p>${message}</p>`,
        },
        (error, body) => {
          if (error) {
            console.log(error);
            res.status(500).send({ message: 'Error in sending email' });
          } else {
            console.log(body);
            res.send({ message: 'Email sent successfully' });
          }
        }
      );
  });

app.get('/dashboard', async (req, res) => {
    try {
        const user = await User.countDocuments()
        const admin = await Admin.countDocuments()
        const device = await Device.countDocuments()
        return res.json({ ok: true, user, device, admin })
    } catch (err) {
        return res.json(err)
    }
})


app.listen(process.env.PORT, () => {
    console.log("Server is Running");
})