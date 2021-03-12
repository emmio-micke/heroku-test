const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.end('<h1>Hello!</h1>')
})

const port = process.env.PORT || 3000;
app.listen(port)
