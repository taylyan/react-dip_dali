import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { userRouter } from './routes/user.js'
import { deviceRouter } from './routes/device.js'
import { emailRouter } from './routes/modeRoutes.js'
import { Device } from './models/Device.js'
import { User } from './models/User.js'
import { Admin } from './models/Admin.js'
import { apiRouter } from './routes/thingspeakApi.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['https://react-dip-dali-front.onrender.com'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/user', userRouter) 
app.use('/device', deviceRouter) 

app.use('/api/thingspeak', apiRouter);
app.use('/email', emailRouter) 


app.get('/dashboard', async (req, res) => {
    try {
        const user = await User.countDocuments()
        const admin = await Admin.countDocuments()
        const device = await Device.countDocuments()
        return res.json({ok: true, user, device, admin})
    } catch(err) {
        return res.json(err)
    }
})


app.listen(process.env.PORT, () => {
    console.log("Server is Running");
})