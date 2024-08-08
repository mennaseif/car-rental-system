import { Car } from "../../../database/models/car.model.js"

const addCar = async (req, res) =>{
    try{
        let car = await Car.insertMany(req.body)
        res.status(201).json({message:"success", car})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const getASpecificCar = async (req, res) =>{
    try{
     let car = await Car.findById(req.params.id)
    if(!car) return res.status(404).json({message:"car is not found"})
        res.status(201).json({message:"success", car })
    }catch (error){
        res.status(500).json({error: error.message})
    }
}
 
const getAllCars = async (req, res) =>{
    try{
        let cars = await Car.find()
    if(!cars) return res.status(404).json({message:"no cars found"})
        res.status(201).json({message:"success", cars})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const updateCar = async(req, res) =>{
    try{
        let car = await Car.updateOne({ _id: req.params.id}, req.body)
        if(!car) return res.status(404).json({message:"car is not found"})
            res.status(201).json({message:"success", car})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const deleteCar = async (req,res) =>{
    try{
        let car = await Car.deleteOne({ _id: req.params.id}, req.body)
        if(!car) return res.status(404).json({message:"car is not found"})
            res.status(201).json({message:"deleted", car})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}


export{
    addCar,
    getASpecificCar,
    getAllCars,
    updateCar,
    deleteCar,
}