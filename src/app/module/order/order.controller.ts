import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { zodValidationOrder } from './order.zod.validation';

import { productServices } from '../product/product.service';

//create order controller
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedOrder = zodValidationOrder.parse(orderData);

    //for bonus section

    const product = await productServices.getSingleDataById(
      zodParsedOrder.productId,
    );
    if (product) {
      if (product.inventory.quantity < zodParsedOrder.quantity) {
        return res.status(404).json({
          success: false,
          message: 'Insufficient quantity available in inventory',
        });
      }
      const result = await orderServices.createOrderIntoDb(zodParsedOrder);
      product.inventory.quantity -= zodParsedOrder.quantity;
      product.inventory.inStock = product.inventory.quantity > 0;
      await product.save();
      // console.log(result)
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Order is not placed please try again',
      error: err,
    });
  }
};
//________Create order controller is done_______

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    // console.log(req.query)
    const result = await orderServices.getAllOrderFromDb(email as string);
    if (result.length === 0) {
      res.status(404).send({
        success: false,
        message: 'No Orders found',
        data: result,
      });
    }
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: 'something went wrong',
      error: err,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
};
