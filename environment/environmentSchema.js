'use strict'
const joi = require('joi')

const envVarsSchema = joi
    .object({
        NODE_ENV: joi.string().valid('development', 'production').required(),
        PORT: joi.number().required(),
    })
    .unknown()
    .required()

module.exports = envVarsSchema
