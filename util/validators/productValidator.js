const Joi = require('joi');

module.exports.validateProductInput = async (
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
) => {
  const productSchema = Joi.object().keys({
    name: Joi.string().min(3).max(100).required(),
    specialPrice: Joi.number().integer().required(),
    price: Joi.number().integer().required(),
    type: Joi.string().min(3).max(30).required(),
    sleeve: Joi.string().min(3).max(30).required(),
    fabric: Joi.string().min(3).max(30).required(),
    pattern: Joi.string().min(3).max(30).required(),
    imgUrl: Joi.string().uri().required(),
    rating: Joi.number().min(3).max(30).required(),
    size: Joi.array().items(Joi.string().min(1).max(3).required()),
    reversible: Joi.boolean().required(),
    idealFor: Joi.string().min(3).max(30).required(),
  });
  try {
    const { error } = await productSchema.validate(
      {
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
      },
      { abortEarly: false }
    );
    if (error) {
      return { isValid: false, error };
    }
    return { isValid: true };
  } catch (err) {
    console.log(err);
    return { message: 'Something went wrong !', error: err.message };
  }
};
