import { Car } from "../../../database/models/car.model.js";
import { Customer } from "../../../database/models/customer.model.js";
import { Rental } from "../../../database/models/rental.model.js"


const addRental = async (req, res) => {
    try {
        const { customerId, carId } = req.body;

        let car = await Car.findById(carId);
        if (!car) return res.status(404).json({ message: "Car not found" });
        if (car.rentalStatus !== "available") return res.status(400).json({ message: "Car is not available" });

        let customer = await Customer.findById(customerId);
        if (!customer) return res.status(404).json({ message: "Customer not found" });

        const rental = new Rental({ customer: customerId, car: carId });
        await rental.save();

        car.rentalStatus = "rented";
        await car.save();

        res.status(201).json({ message: "Rental created successfully", rental });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateRental = async(req, res) =>{
    try{
        let rental = await Rental.updateOne({ _id: req.params.id}, req.body)
        if(!rental) return res.status(404).json({message:"car is not found"})
            res.status(201).json({message:"success", rental})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const deleteRental = async (req,res) =>{
    try{
        let rental = await Rental.deleteOne({ _id: req.params.id}, req.body)
        if(!rental) return res.status(404).json({message:"car is not found"})
            res.status(201).json({message:"deleted", rental})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const getAllRental = async (req, res) =>{
    try{
        let rentals = await Rental.find()
        if(!rentals) return res.status(404).json({message:"no rentals found"})
            res.status(201).json({message:"success", rentals})
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const getASpacificRental = async (req, res) =>{
    try{
        let rental = await Rental.findById(req.params.id)
        if(!rental) return res.status(404).json({message:"rental is not found"})
            res.status(201).json({message:"success", rental })
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

export{
    addRental,
    updateRental,
    deleteRental,
    getAllRental,
    getASpacificRental
}