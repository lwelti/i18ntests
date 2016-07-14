'use strict';

var app = require('./index');
var http = require('http');


var server;

/*
 * Create and start HTTP server.
 */
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

server = http.createServer(app);
server.listen(port,ipaddress);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
