'use strict'

const config = {
    env: process.env.NODE_ENV,
    logger: {
        level: process.env.NODE_ENV === 'production' ? 'tiny' : 'dev',
    },
    server: {
        port: Number(process.env.PORT),
    },
}

module.exports = config
