import { Schema, model } from "mongoose";

const schema = new Schema({
    name:String,
    email:String,
    password:String,
    phoneNumber:Number,
    confirmEmail:{
        type:Boolean,
        default:false
    },
    role: {
        type:String,
        enum:['admin', 'user'],
        default: 'user'
    },
},{
    timestamps: {updatedAt: false},
    versionKey: false
})

export const Customer = model ("customer", schema)