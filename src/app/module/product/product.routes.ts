import express from "express"
import { productController } from "./product.controller";



const router = express.Router()

//will call controller function
router.post('/',productController.createProduct);
router.get('/',productController.getAllProduct);
router.get('/:productID',productController.getSingleProduct);
router.put('/:productID',productController.updateAProduct);
router.delete('/:productID',productController.deleteSingleProduct)



export const productRoutes = router;