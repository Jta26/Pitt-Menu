var fs = require('fs');
var express = require('express');
var morgan = require('morgan');
var greenlock = require('greenlock-express');
var app = express();
var router = require('./routes/router');

morgan('tiny');

app.use('/', router)


greenlock.create({
    version: 'draft-11',
    server: 'https://acme-v02.api.letsencrypt.org/directory',

    email:'jta26@Pitt.edu',
    approveDomains: ['api.joelaustin.net'],
    agreeTos: true,
    configDir: './',

    app: function(req, res) {
        require('./index.js');
    },

    communityMember: true,
    telemetry: true
}).listen(80, 443);

