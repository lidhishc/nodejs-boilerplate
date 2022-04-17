'use strict'
const joi = require('joi')

const envVarsSchema = joi
    .object({
        NODE_ENV: joi.string().valid('development', 'production').required(),
        PORT: joi.number().required(),
        USER_NAME: joi.string().required(),
        PASSWORD: joi.string().required(),
        DB_NAME: joi.string().required(),
        DB_HOST: joi.string().required(),
    })
    .unknown()
    .required()

module.exports = envVarsSchema
