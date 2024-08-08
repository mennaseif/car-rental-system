import { Router } from 'express'
import { deleteCustomer, getAllCustomers, getASpacificCustomer, login, signup, updateCustomer } from './customer.controller.js'
import { checkEmail } from '../../middleware/checkEmail.js'

const customerRouter= Router()

customerRouter.post('/signup',checkEmail, signup )
customerRouter.post('/login', login )
customerRouter.get('/:id', getASpacificCustomer)
customerRouter.get('/', getAllCustomers)
customerRouter.put('/:id', updateCustomer)
customerRouter.delete('/:id', deleteCustomer)

export default customerRouter