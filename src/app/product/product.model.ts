import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

//define the variant schema
const variantSchema = new Schema<TVariant>(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

//Define the inventory schema

const inventorySchema = new Schema<TInventory>(
  {
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false }
);

//Define the product schema

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

//Export the model
export const Product = model<TProduct>("Product", productSchema);
