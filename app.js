const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.json([
        {
            name: 'object 1',
            message: 'lorem ipsum'
        },
        {
            name: 'object 2',
            message: 'hello world'
        }
    ])
})

const port = process.env.PORT || 3000;
app.listen(port)
