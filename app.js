const express = require("express");
const app = express();
const router = require('./routers')
const bodyParser = express.json();


app.use(bodyParser);
app.use('/api',router)
module.exports = app;