import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { zodValidationOrder } from './order.zod.validation';

//create order controller
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedOrder = zodValidationOrder.parse(orderData)
    const result = await orderServices.createOrderIntoDb(zodParsedOrder);
    // console.log(result)
    res.status(200).json({
        success: true,
        message:"Order created successfully!",
        data:result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Order is not placed please try again',
      error: err,
    });
  }
};
//________Create order controller is done_______

const getAllOrders = async(req:Request,res: Response) =>{
    try{
        const result  = await orderServices.getAllOrderFromDb();
        res.status(200).json({
            success:true,
            message:"Orders fetched successfully!",
            data:result
        })

        
    
    }catch(err){
        res.status(500).json({
            success:true,
            message:"something went wrong",
            error:err
        })
    }
}



export const orderController = {
  createOrder,
  getAllOrders
};
