import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  productName: String,
  maxAmount: Number,
  tenor: Number,
  rate: Number,
  image: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;