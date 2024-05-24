import { Request, Response } from 'express';
import { ZodValidationProduct } from './product.zod.validation';
import { productServices } from './product.service';


//IT IS POST SECTION

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParsedData = ZodValidationProduct.parse(productData);

    const result = await productServices.createProductIntoDb(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully.',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!!.',
      error: err,
    });
  }
};

//_________create product end______

//get all data from db
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.getAllProductsFromDB(
      searchTerm as string
    );
    if(result.length === 0){
        res.status(404).json({
          success:true,
          message:"This Product is not available",
        })
      }else{
      res.status(200).json({
        success:true,
        message:"Product retrived successfully",
        data:result,
      })}
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
};
