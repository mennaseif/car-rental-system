import express from 'express'
import { dbconn } from './database/dbConnection.js'
import customerRouter from './src/modules/customer/customer.routes.js'
import carRouter from './src/modules/car/car.routes.js'
import rentalRouter from './src/modules/rental/rental.routes.js'
import specialRoutes from './src/modules/specialApis/special.routes.js'
import jwt from 'jsonwebtoken'
import cors from "cors"
import { Customer } from './database/models/customer.model.js'

const app = express()
const port =process.env.PORT || 3000
app.use(cors())

app.use(express.json())
app.use('/auth', customerRouter)
app.use('/customer', customerRouter)
app.use('/car', carRouter)
app.use('/rental',rentalRouter)
app.use('/special',specialRoutes)

app.get('/verify/:token', async (req,res) =>{

    jwt.verify(req.params.token, 'menna', async (err, payload) =>{
        if(err) return res.json(err)
        await Customer.findOneAndUpdate({email:payload.email},{confirmEmail:true})
        res.json({message:"success", email:payload.email})
    })

})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))