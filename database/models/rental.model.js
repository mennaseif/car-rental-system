import { Schema, Types, model } from "mongoose";


const schema = new Schema({
    customer:{
        type: Types.ObjectId, 
        ref:"Customer"
 },

 car:{
    type: Types.ObjectId, 
    ref:"Car"
},
   rentalDate:{ type: Date, default: Date.now },
   returnDate:Date
},{
    timestamps: {updatedAt: false},
    versionKey: false
})

export const Rental = model ('rental' , schema)