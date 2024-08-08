import { connect } from "mongoose"

export const dbconn = connect ("mongodb://localhost:27017/car_rental")
.then (() =>{
    console.log("connected successfully to server")
})