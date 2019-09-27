const express = require('express')
const app = express()
const router = require('./router')

app.use(router)

app.listen(3000, '0.0.0.0');
