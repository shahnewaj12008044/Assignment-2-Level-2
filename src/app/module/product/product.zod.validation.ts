import { z } from 'zod';

const variantSchema = z.object({
    type: z.string({message: '{VALUE} is not string'}),
    value: z.string({message: '{VALUE} is not string'})
});

const inventorySchema = z.object({
    quantity: z.number({message:"Please input a valid number"}).nonnegative({message:"please input a positive number"}).int(),
    inStock: z.boolean({message: "inStock can be either true or false!!!"})
});

const productSchema = z.object({
    name: z.string().max(20, {message: 'Product name can not be more than 20 characters'}),
    description: z.string(),
    price: z.number({message: '{VALUE} is not string'}),
    category: z.string({message: '{VALUE} is not string'}),
    tags: z.array(z.string()),
    variants: z.array(variantSchema),
    inventory: inventorySchema
});

export const ZodValidationProduct = productSchema;