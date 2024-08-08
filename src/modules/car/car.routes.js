import { Router } from "express";
import { addCar, deleteCar, getAllCars, getASpecificCar, updateCar } from "./car.controller.js";


const carRouter = Router()

carRouter.post('/', addCar)
carRouter.get('/', getAllCars)
carRouter.get('/:id', getASpecificCar)
carRouter.put('/:id', updateCar)
carRouter.delete('/:id', deleteCar)


export default carRouter