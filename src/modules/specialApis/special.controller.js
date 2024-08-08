import { Car } from "../../../database/models/car.model.js";


const getCarByName = async (req, res) =>{
    try{
       const cars = await Car.find({name:{$in:["honda" , "toyota"]} })
        if (cars.length === 0) {
            return res.status(404).json({ message: 'No cars found for the specified names' });
        }
        res.status(200).json({message:"success", cars});
       }catch (error){
           res.status(500).json({error: error.message})
       }
}

const getAvailableCars = async (req, res) =>{
    try{
        const cars = await Car.find({name: req.query.name ,rentalStatus: "available"})
         if (cars.length === 0) return res.status(404).json({ message: 'No cars found for the specified name' });4
         res.status(200).json({message:"success", cars});
        }catch (error){
            res.status(500).json({error: error.message})
        }
}

const getRentedCars = async (req, res) =>{
    try{
    const {name}= req.query
    let cars 
        if(name ){
            cars= await Car.find({name: req.query.name })
        }else {
            cars= await Car.find({rentalStatus: "rented"})
        } 
    if (cars.length === 0) return res.status(404).json({ message: 'No cars found for the specified name' });
         res.status(200).json({message:"success", cars});
        }catch (error){
            res.status(500).json({error: error.message})
        }
}

const getAvailableOrRentedCars = async (req, res) =>{
    try{
        const {name}= req.query
        const cars = await Car.find({$or:[{name ,rentalStatus: "available"},{name,rentalStatus: "rented"}]})

         if (cars.length === 0) return res.status(404).json({ message: 'No cars found for the specified name' });4
         res.status(200).json({message:"success", cars});
        }catch (error){
            res.status(500).json({error: error.message})  
}
}

export{
    getCarByName,
    getAvailableCars,
    getRentedCars,
    getAvailableOrRentedCars
}