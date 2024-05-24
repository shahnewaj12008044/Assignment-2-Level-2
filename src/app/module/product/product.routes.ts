import express from "express"
import { productController } from "./product.controller";



const router = express.Router()

//will call controller function
router.post('/',productController.createProduct);
router.get('/',productController.getAllProduct);



export const productRoutes = router;