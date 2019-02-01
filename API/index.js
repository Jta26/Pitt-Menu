var express = require('express');
var app = express();
var router = require('./routes/router')
const port = 3000;



app.use('/', router)
app.listen(port, () => console.log(`App listening on ${port}`))