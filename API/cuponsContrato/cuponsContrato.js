const Joi = require('joi');

const couponsSchema = Joi.array().items(
    Joi.object({
        code: Joi.string(),
        amount: Joi.string(),
        discount_type: Joi.string(),
        description: Joi.string()
    }).unknown(true)
);

module.exports = couponsSchema;