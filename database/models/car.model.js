import { Schema ,Types,model } from "mongoose";

const schema = new Schema({
    name:String,
    model:String,
    rentalStatus:{
        type:String,
        default:'available'
    },
    customer:{
        type:Types.ObjectId, 
        ref:"customer"
 }
},{
 timestamps: {updatedAt: false},
 versionKey: false
})

export const Car = model ("Car" ,schema)