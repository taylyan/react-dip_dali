import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    region: {type: String},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
})

const userModel = mongoose.model('User', userSchema)
export {userModel as User}