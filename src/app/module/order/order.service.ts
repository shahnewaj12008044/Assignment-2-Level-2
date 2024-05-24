import { TOrder } from "./order.interface"
import { Order } from "./order.model"

//creating order
const createOrderIntoDb = async(orderData: TOrder) =>{
    const result = await Order.create(orderData)
    return result
}


//getting all orders

const getAllOrderFromDb = async() =>{
    const result = await Order.find();
    return result
}


export const orderServices = {
    createOrderIntoDb,
    getAllOrderFromDb,
}