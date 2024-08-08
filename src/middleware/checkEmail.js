import  bcrypt  from "bcrypt"
import { Customer } from "../../database/models/customer.model.js"

export const checkEmail= async (req,res,next)=>{
    try{
        let isFound = await Customer.findOne({email: req.body.email})
        if(isFound) return res.status(409).json({message:"email is already exist"})
            req.body.password= bcrypt.hashSync(req.body.password, 8)
        next()
    }catch (error){
        res.status(500).json({error: error.message})
    }
}
