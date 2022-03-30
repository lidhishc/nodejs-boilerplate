/* eslint-disable no-console */
require('dotenv').config()
const PORT = process.env.PORT || 3030
const app = require('./app')

app.listen(PORT, (err) => {
    if (err) {
        console.log('Something went wrong')
    }
    console.log('Server is running on port %s', PORT)
})
