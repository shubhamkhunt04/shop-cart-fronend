const express = require('express');
const Order = require('../model/Order');
const Product = require('../model/Product');

const orderRouter = express.Router();

// orders route
orderRouter
  .get('/', async (req, res) => {
    try {
      const orders = await Order.find();
      return res.json({
        payload: orders,
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
  .post('/createOrder', async (req, res) => {
    console.log('Create order');
    try {
      const { products } = req.body;
      console.log(products);
      var productIdIsFound = true;
      // check ordered product is exist in database or not
      const productExistInDB = new Promise((resolve, reject) => {
        products.forEach(async (product) => {
          const findProduct = await Product.findById(product._id);
          console.log({ findProduct });
          if (!findProduct) {
            // product is not exist in db
            reject({ message: 'Product Id not found' });
          }
          resolve(true);
        });
      });

      productExistInDB
        .then(async (exist) => {
          if (exist) {
            const createOrder = await Order.create(products);
            if (!createOrder) {
              return res.json({
                payload: result,
                message: 'Product not found',
                status: 400,
              });
            }
            return res.json({
              payload: createOrder,
              message: 'Product created successfully',
              status: 200,
            });
          }
        })
        .catch((error) => {
          console.log({ error });
          return res.json({
            message: 'Something went wrong !',
            err: error.message,
            status: 400,
          });
        });
    } catch (error) {
      return res.json({
        message: 'Something went wrong !',
        err: error.message,
        status: 400,
      });
    }
  });

// single order route
orderRouter.get('/:orderId', async (req, res) => {
  try {
    const product = await Order.findById(req.params.productId);
    if (!product) {
      return res.json({
        message: 'Order not found',
        status: 200,
      });
    }
    return res.json({
      payload: product,
      message: 'Order fetched successfully',
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

module.exports = orderRouter;
