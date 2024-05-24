import { z } from 'zod';


const orderSchema = z.object({
  email: z.string().email({message:"Please input a valid email"}),
  productId: z.string({message:"please input a valid product id"}),
  price: z.number().nonnegative(),
  quantity: z.number().int().positive({message:"Please input a valid quantity"})
});

export const zodValidationOrder = orderSchema;