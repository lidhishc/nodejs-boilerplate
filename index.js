/* eslint-disable no-console */
require('dotenv').config()
const app = require('./app')
const {
    server: { port },
} = require('./config/config')

app.listen(port, (err) => {
    if (err) {
        console.log('Something went wrong')
    }
    console.log('Server is running on port %s', port)
})
