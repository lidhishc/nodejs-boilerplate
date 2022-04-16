const envVarsSchema = require('./environmentSchema')

const { envVariables } = require('./env.Variables')

envVariables.forEach((name) => {
    if (!process.env[name]) {
        throw new Error(`Environment variable ${name} is missing`)
    }
})

const { error } = envVarsSchema.validate(process.env)

if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}
