import { Router } from "express";
import { addRental, deleteRental, getAllRental, getASpacificRental } from "./rental.controller.js";


const rentalRouter= Router()

rentalRouter.post('/', addRental)
rentalRouter.put('/:id', addRental)
rentalRouter.delete('/:id', deleteRental)
rentalRouter.get('/', getAllRental)
rentalRouter.get('/:id', getASpacificRental)



export default rentalRouter