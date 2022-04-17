'use strict'

const { NODE_ENV, PORT, USER_NAME, PASSWORD, DB_NAME, DB_HOST } = process.env
const config = {
    env: NODE_ENV,
    logger: {
        level: NODE_ENV === 'production' ? 'tiny' : 'dev',
    },
    server: {
        port: Number(PORT),
    },
    database: {
        username: USER_NAME,
        password: PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: 'postgres',
        logging: false,
    },
}

module.exports = config
