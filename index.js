require('dotenv').config(); // Load all environment variable
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { corsWithOptions } = require('./cors');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');

const port = 4000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongodb connected');
  })
  .catch((err) => console.log(err));

app.use(cors(corsWithOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
