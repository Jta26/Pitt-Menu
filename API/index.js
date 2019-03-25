var fs = require('fs');
var https = require('https');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var helmet = require('helmet');
var app = express();
var router = require('./routes/router');

// var privatekey = fs.readFileSync('/etc/letsencrypt/live/joelaustin.net/privkey.pem');
// var cert = fs.readFileSync('/etc/letsencrypt/live/joelaustin.net/fullchain.pem');
// var creds = {key: privatekey, cert: cert};


app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(8080, console.log('Server Started on 8080'));

// https.createServer(creds, app).listen(443);
