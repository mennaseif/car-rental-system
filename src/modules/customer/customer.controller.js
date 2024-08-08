import { Customer } from "../../../database/models/customer.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmails } from "../../email/email.js"

const signup= async (req, res) => {
    try{
       let customer = await Customer.insertMany(req.body)
       sendEmails(req.body.email)
       customer[0].password= undefined
       res.status(201).json({message:"success",customer})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const login= async (req, res) => {
    try{
       let customer = await Customer.findOne({email: req.body.email})
       if(!customer || !bcrypt.compareSync(req.body.password, customer.password))
        return res.status(401).json({message:"wrong email or password"})
    jwt.sign({_id:customer._id, name:customer.name, role:customer.role},
        'myNameIsMenna', (err, token) =>{
            res.json({message:"login successfully",token})
        })
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const getASpacificCustomer = async (req, res) =>{
    try{
        let customer = await Customer.findById(req.params.id)
        res.status(201).json({message:"success", customer })
        if(!customer) return res.status(404).json({message:"customer is not found"})

    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const getAllCustomers = async (req, res) =>{
    try{
        let customers = await Customer.find({},'-password')
        res.status(201).json({message:"success", customers})
        if(!customers) return res.status(404).json({message:"no customers found"})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const updateCustomer = async(req, res) =>{
    try{
        let {id} = req.params
        let{ name, phoneNumber, customerId} = req.body
        if( id != customerId) return res.json({message:"You are not the owner"})
    let customer = await Customer.updateOne({ _id: req.params.id},{$set:{ name, phoneNumber}})
    if(!customer) return res.status(404).json({message:"no customers found"})
       return res.status(201).json({message:"updated successfully", customer})
     
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const deleteCustomer = async (req, res) =>{
    try{
        let {id} = req.params
        let{customerId} = req.body
        if( id != customerId) return res.json({message:"You are not the owner"})
    let customer = await Customer.deleteOne({ _id: req.params.id})
    if(!customer) return res.status(404).json({message:"no customers found"})
       return res.status(201).json({message:"deleted successfully", customer})
     
    }catch (error){
        res.status(500).json({error: error.message})
    }
}




export {
    signup,
    login,
    getASpacificCustomer,
    getAllCustomers,
    updateCustomer,
    deleteCustomer
}