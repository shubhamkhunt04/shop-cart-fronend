const express = require('express');
const Product = require('../model/Product');
const { validateProductInput } = require('../util/validators/productValidator');

const productRouter = express.Router();

// products route
productRouter
  .get('/', async (req, res) => {
    try {
      const products = await Product.find();
      return res.json({
        payload: products,
        message: 'Products fetched successfully',
        status: 200,
      });
    } catch (error) {
      return res.json({
        message: 'Something went wrong !',
        err: error.message,
        status: 400,
      });
    }
  })
  .post('/addproduct', async (req, res) => {
    const {
      name,
      specialPrice,
      price,
      type,
      sleeve,
      fabric,
      pattern,
      imgUrl,
      rating,
      size,
      reversible,
      idealFor,
      quantity,
    } = req.body;

    const { error } = await validateProductInput(
      name,
      specialPrice,
      price,
      type,
      sleeve,
      fabric,
      pattern,
      imgUrl,
      rating,
      size,
      reversible,
      idealFor,
      quantity
    );
    if (error) {
      return res.json({
        message: error.details.map((e) => e.message),
        status: 400,
      });
    }
    try {
      const product = await Product.create(req.body);
      if (product) {
        return res.json({
          payload: product,
          message: 'Product created successfully',
          status: 200,
        });
      }
    } catch (error) {
      return res.json({
        message: 'Something went wrong !',
        err: error.message,
        status: 400,
      });
    }
  });

// single product route
productRouter.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.json({
        message: 'Product not found',
        status: 200,
      });
    }
    return res.json({
      payload: product,
      message: 'Product fetched successfully',
      status: 200,
    });
  } catch (error) {
    return res.json({
      message: 'Something went wrong !',
      err: error.message,
      status: 400,
    });
  }
});

module.exports = productRouter;
