import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//CREATE PRODUCT SERVICE FUNCTION
const createProductIntoDb = async(productData : TProduct) =>{
    const result =await Product.create(productData);
    return result;
}


export const productServices = {
    createProductIntoDb,
}