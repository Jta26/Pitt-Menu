const { dialogflow } = require('actions-on-google');
const {
    SimpleResponse,
    BasicCard,
    Image,
    Suggestions,
    Button
  } = require('actions-on-google');
const { WebhookClient } = require('dialogflow-fulfillment');


function WelcomeIntent(agent) {
    agent.add('Hello World This is Data From A WebHook API');
}




function googleWebhookProcessor(req, res) {
    const agent = new WebhookClient({request: req, response: res});
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', WelcomeIntent);

    agent.handleRequest(intentMap);
}
module.exports = googleWebhookProcessor;