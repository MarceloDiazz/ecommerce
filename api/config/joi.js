const Joi = require("@hapi/joi");

const joi = Joi.object({
    name: Joi.string().min(3).max(10),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", 'ar'] } }),
});

module.exports = joi