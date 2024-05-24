import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//CREATE PRODUCT SERVICE FUNCTION
const createProductIntoDb = async(productData : TProduct) =>{
    const result =await Product.create(productData);
    return result;
}

//GET ALL DATA SERVICE FUNCTION:
const getAllProductsFromDB = async (searchTerm: String) => {
    if (searchTerm) {
        const result = await Product.find({
         $or:[
          {name: { $regex: searchTerm, $options: "i" }},
          {description:{$regex:searchTerm,$options:"i"}},
          {tags:{$regex:searchTerm,$options:"i"}}
         ]});
        return result;
      }
    const result = await Product.find();
    return result;
  };

  //GET A SINGLE PRODUCT BY ID:
const getSingleDataById = async(id:string) =>{
    const result = await Product.findById(id);
    return result;
}

//UPDATE PRODUCT BY ID:
const updateProductFromDB = async (id: string, body: TProduct) => {
    const result = await Product.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
        overwrite: true,
    });
    return result;
}

//DELETE PRODUCT BY ID:
const deleteSingleProductFromDB = async (id: string) => {
    const result = await Product.deleteOne({ _id: id });
    return result;
}


  

export const productServices = {
    createProductIntoDb,
    getAllProductsFromDB,
    getSingleDataById,
    updateProductFromDB,
    deleteSingleProductFromDB,
}
