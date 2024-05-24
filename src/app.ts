import express, { Application, Request, Response } from "express"
import cors from "cors"
import { productRoutes } from "./app/module/product/product.routes"



const app : Application = express()

//parsers
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/products',productRoutes)

app.get('/', (req: Request, res:Response) => {
  res.send('Hello World!')
})

export default app;