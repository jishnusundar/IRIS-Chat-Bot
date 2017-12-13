'use strict';

const slackClient = require('../server/slackClient');
const service = require('../server/service');
const http = require('http');

const slackToken = 'xoxb-285853853329-ZuVdCjU0GjGpW98jrFj7PuWj';
const slackLogLevel = 'debug';

const rtm = slackClient.init(slackToken,slackLogLevel);
rtm.start();

const server = http.createServer(service);
server.listen(4000);



server.on('listening',function () {
    console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')} mode`)
});