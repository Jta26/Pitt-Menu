var fs = require('fs');
var https = require('https');
var express = require('express');
var morgan = require('morgan');
var helmet = require('helmet');
var app = express();
var router = require('./routes/router');

var privatekey = fs.readFileSync('/etc/letsencrypt/live/api.joelaustin.net-0001/privkey.pem');
var cert = fs.readFileSync('/etc/letsencrypt/live/api.joelaustin.net-0001/fullchain.pem');
var creds = {key: privatekey, cert: cert};

app.use(helmet());
app.use(morgan('tiny'));
app.use('/', router)

https.createServer(creds, app).listen(443);
