import Product from '../models/productModel.js';

export const getProducts = async (req, res) => {
  try {
    const productList = await Product.find({});
    res.status(200).send(productList);
  } catch (error) {
    res.status(500).json(error);
  }
};