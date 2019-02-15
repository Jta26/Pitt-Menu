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

function delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
}
async function delayedConcat(str, item) {
    await delay();
    return new Promise(resolve(str.concat(item)));
}

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
        menutypeBool = 1;
    }
    else {
        menutypeBool = 0;
    }
    console.log(menutype, menutypeBool, date, timeperiod);
    return getMenu(menutypeBool, date).then(async (items) => {
	itemlist = ''
        for (var item of items) {
            await delayedConcat(itemList, item).then((str) => {
                itemList = str;
            });
        }
        agent.add(`<speak> For ${menutype} on ${date} is: ${itemlist}</speak>`);
    }).catch(() => {
        
    });
}
function getMenu(menutypeBool, date) {
    return new Promise((resolve, reject) => {
        sqlService(date, menutypeBool, function(result) {
            items = '';
            resolve(result[0]);
        });
        
    });
	
}
function googleWebhookProcessor(req, res) {
    const agent = new WebhookClient({request: req, response: res});
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcomeIntent);
    intentMap.set('Get Menu', menuIntent);
    agent.handleRequest(intentMap);
}
module.exports = googleWebhookProcessor;
