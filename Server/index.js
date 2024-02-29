import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import { bookRouter } from './routes/book.js'
import { Book } from './models/Book.js'
import { Student } from './models/Student.js'
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
app.use('/student', studentRouter)
app.use('/book', bookRouter)

app.use('/api/thingspeak', apiRouter);


app.get('/dashboard', async (req, res) => {
    try {
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const book = await Book.countDocuments()
        return res.json({ok: true, student, book, admin})
    } catch(err) {
        return res.json(err)
    }
})
app.useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/thingspeak');
            console.log(response.data.field1);
            setFieldValue(response.data.field1);
        } catch (error) {
            console.error('Error fetching data from ThingSpeak:', error);
        }
    };

    fetchData();
}, []);

app.listen(process.env.PORT, () => {
    console.log("Server is Running");
})