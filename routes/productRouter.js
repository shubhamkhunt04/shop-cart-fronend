const express = require('express');
const Product = require('../model/Product');
const { validateProductInput } = require('../util/validators/productValidator');

const productRouter = express.Router();

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
      idealFor
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

// productRouter
//   .get('/:userId/posts', async (req, res) => {
//     result = {};
//     try {
//       const user = await User.findById(req.params.userId).populate('posts');
//       res.send(user.posts);
//     } catch (error) {
//       throw new Error('Post not Found');
//     }
//   })
//   .post('/:userId/createpost', async (req, res) => {
//     result = {};
//     try {
//       const post = await Post.create(req.body);
//       const user = await User.findById(req.params.userId);
//       user.posts.push(post.id);
//       await user.save();
//       res.send(post);
//     } catch (error) {
//       throw new Error('Post not create');
//     }
//   });

module.exports = productRouter;
