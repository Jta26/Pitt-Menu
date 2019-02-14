var fs = require('fs');
var express = require('express');
var morgan = require('morgan');

var http = require('http');
var https = require('https');
var privatekey = fs.readFileSync('/etc/letsencrypt/live/api.joelaustin.net/privkey.pem');
var cert = fs.readFileSync('/etc/letsencrypt/live/api.joelaustin.net/fullchain.pem');

var creds = {key: privatekey, cert: cert};

var greenlock = require('greenlock-express');
var app = express();
var router = require('./routes/router');

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/', router)

var httpServer = http.createServer(app);
var httpServer = https.createServer(creds, app);

httpServer.listen(80);
httpServer.listen(443);
// greenlock.create({
//     version: 'draft-11',
//     server: 'https://acme-staging-v02.api.letsencrypt.org/directory',

//     email:'jta26@Pitt.edu',
//     approveDomains: ['api.joelaustin.net'],
//     agreeTos: true,
//     configDir: './',

//     app: function(req, res) {
//         require('./index.js');
//     },

//     communityMember: true,
//     telemetry: true
// }).listen(80, 443);
