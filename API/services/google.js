const { dialogflow } = require('actions-on-google');
const {
    SimpleResponse,
    BasicCard,
    Image,
    Suggestions,
    Button
  } = require('actions-on-google');
const { WebhookClient } = require('dialogflow-fulfillment');
const sqlService = require('./sqlservice');
const async = require('async');

function welcomeIntent(agent) {
    var ssml = "<speak>Welcome to Pitt Menu! <break time='.3s'/> You can ask things such as, <break time='.3s'/> What's for lunch today? <break time='.3s'/> or <break time='.3s'/> What's for supper on thursday? </speak>"
    agent.add(ssml);
}
function menuIntent(agent) {
    var menutype = agent.parameters.menu;
    var date = agent.parameters.date;
    var timeperiod = agent.parameters['time-period'];
    var menutypeBool;
    date = date.split('T')[0];
    if (menutype == 'dinner') {
        menutypeBool = 0;
    }
    else {
        menutypeBool = 1;
    }
    console.log(menutype, menutypeBool, date, timeperiod);
    var itemList = '';
    var getMenu = new Promise((resolve, reject) => {
        sqlService(date, menutypeBool, function(result) {
            async.forEach(result[0], function(item, callback) {
		itemName = item['Item Name'];
		itemName = itemName.replace('&', 'and');
		console.log(itemName);
                itemList += itemName + ' <break time=".3s"/> ';
            });
            resolve();
        });
    });
    return getMenu.then(() => {
        var SSML = "<speak> Okay! The Menu for " + menutype + " on " + date + " is: <break time='.5s'/>" + itemList + "</speak>";
        agent.add(SSML);
    })
    
}
function googleWebhookProcessor(req, res) {
    const agent = new WebhookClient({request: req, response: res});
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcomeIntent);
    intentMap.set('Get Menu', menuIntent);
    agent.handleRequest(intentMap);
}
module.exports = googleWebhookProcessor;
