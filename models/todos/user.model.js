import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
},
email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
},
password: {
    type: String,
    required: true
}
}, { timestamps: true });

export const User = mongoose.model( "User", userSchema );

// the user becomes "users" when it goes mongoDB. It means that it just create the value as plural of one model
