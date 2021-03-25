const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const app = express()
app.use(bodyParser.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app