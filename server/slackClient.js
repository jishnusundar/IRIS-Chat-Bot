//BAD WAY OF DOING MICrOSerVICES
/* var rtmClient = require('@slack/client').RtmClient;

//var token = process.env.SLACK_API_TOCKEN || '';

var token = 'xoxb-285853853329-ZuVdCjU0GjGpW98jrFj7PuWj';

var rtm = new RtmClient(token,{logLevel:'debug'});
rtm.start();

 */ 

 //BETTER WAY

 'use strict';

 var RtmClient = require('@slack/client').RtmClient;

 module.exports.init = function slackClient(token, logLevel) {

    const rtm = new RtmClient(token,{logLevel:logLevel});
    return rtm;

 }