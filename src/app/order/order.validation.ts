import Joi from "joi";

// Define the order validation schema
const orderValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  productId: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
});

export default orderValidationSchema;
