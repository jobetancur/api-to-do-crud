const express = require ('express');
require('dotenv').config()
const toDoRouter = require('./to-do/to-do.router').router

const port = process.env.PORT

const app = express()

app.use(express.json())

app.use('/api/v1/to-do', toDoRouter)

app.use('/', (req, res) => {
    res.json({message: 'Petition whith use', method: req.method})
})

app.listen(port, () => {
    console.log(`The server started on port: ${port}`);
})