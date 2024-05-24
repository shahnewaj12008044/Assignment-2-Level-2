import express, { Application, Request, Response } from "express"
import cors from "cors"
import { productRoutes } from "./app/module/product/product.routes"
import { orderRoutes } from "./app/module/order/order.route"



const app : Application = express()

//parsers
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/products',productRoutes)
app.use('/api/orders',orderRoutes)

app.get('/', (req: Request, res:Response) => {
  res.send('Hello World!')
})

export default app;