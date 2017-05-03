'use strict';

const Alexa=require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.d42a1475-25c6-41c5-93a5-9a4b02c6be65';
const Messages = require('./telenormessages'); 

const handlers = {
    "LaunchRequest" : () =>{
        this.emit(':ask',Messages.Welcome_Message);
    },
    "GetYourMaster" : () =>{
        console.log(`in GetYourMasterIntent the event is ${JSON.stringify(this)}`)
        this.emit(':ask',Messages.Master_Message);
    },
    'GetRandomNumber': function () {
        console.log(`In  GetRandomNumber ${JSON.stringify(this)}`);
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        //const factArr = this.t('FACTS');
        console.log(`In  GetFact ${JSON.stringify(this)}`);
        const factIndex = Math.floor(Math.random());
        //const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = `${Messages.RandomNumberText} a ${factIndex}`;
        this.emit(':tell', speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        console.log(`In  AMAZON.HelpIntent `);
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = Messages.HELP_MESSAGE;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', Messages.STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', Messages.STOP_MESSAGE);
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', Messages.STOP_MESSAGE);
    }
};
exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};