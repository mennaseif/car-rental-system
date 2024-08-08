import { Router } from "express";
import { getAvailableCars, getAvailableOrRentedCars, getCarByName, getRentedCars } from "./special.controller.js";


const specialRoutes= Router()


specialRoutes.get('/',getCarByName)
specialRoutes.get('/availableCars',getAvailableCars)
specialRoutes.get('/rentedCars',getRentedCars)
specialRoutes.get('/allCars',getAvailableOrRentedCars)

export default specialRoutes