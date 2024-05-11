import mongoose from "mongoose";

const todoSchema = new mongoose.Schema( {
    content: {
        type: String,
        required: true
    },
    complete:{
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"// this should be the name from model in our User model case it will be User which we exported "export const User = mongoose.model( "User", userSchema );"
    },
    subTodos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] //Array of SubTodo-s
}, { timestamps: true } );

export const Todo = mongoose.model( "Todo", todoSchema );
