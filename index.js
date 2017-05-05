'use strict';

const Alexa=require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.d42a1475-25c6-41c5-93a5-9a4b02c6be65';
const Messages = require('./telenormessages'); 
const moment = require('moment');

const handlers = {
    'LaunchRequest' : function(){
        this.emit(':ask',Messages.Welcome_Message);
    },
    'GetYourMaster' : function(){
        console.log(`${Messages.Master_Message} in GetYourMasterIntent the event is ${JSON.stringify(this)}`)
        this.emit(':ask',Messages.Master_Message);
    },
    'CheckContextualIntent': function(){
        console.log(`Here in CheckContextualIntent event is ${JSON.stringify(this)}`);
        this.emit(':ask',`Okay for What city do you want it`);
    },
    'GetCityIntent': function(){
        console.log(`Here in GetCityIntent event is ${JSON.stringify(this)}`);
        console.log(`The slots are ${this.event.request.intent.slots}`);
        this.emit(':ask',Messages.ContextualSuccess);
    },
    'CheckAnonymusFunctionIntent': ()=>{
        console.log(`Need to stringfy this here ${JSON.stringify(this)}`);
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
        const factIndex = Math.floor(Math.random()*100);
        //const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = `${Messages.RandomNumberText} a ${factIndex}`;
        this.emit(':tell', speechOutput);
    },
    'CheckCurrentBalanceNonContextualIntent': function(){
        console.log(`In  CheckCurrentBalanceNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':ask',Messages.CurrentBalanceResponseNonContextual,Messages.HELP_MSG)
    },
    'CheckCurrentUsageNonContextualIntent': function(){
        console.log(`In  CheckCurrentUsageNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':tell',Messages.CurrentUsageResponseNonContextual)
    },
    'CheckCurrentInternetStatusNonContextualIntent': function(){
        console.log(`In  CheckCurrentInternetStatusNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':tell',Messages.CurrentInternetStatusResponseNonContextual)
    },
    'InvoiceCallbackNonContextualIntent': function(){
        console.log(`In  InvoiceCallbackNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':tell',Messages.InvoiceCallbackResponseNonContextual)
    },
    'CheckCoverageInAreaNonContextualIntent': function(){
        console.log(`In  CheckCoverageInAreaNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':tell',Messages.AreaCoverageResponseNonContextual)
    },
    'CheckSubscriptionNonContextualIntent': function(){
        console.log(`In  CheckSubscriptionNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':tell',Messages.MySubscriptionResponseNonContextual)
    },
    'CheckOffersNonContextualIntent': function(){
        console.log(`In  CheckOffersNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':tell',Messages.CurrentOffersResponseNonContextual)
    },
    'TelenorIdIntent': function(){
        console.log(`In  TelenorIdIntent ${JSON.stringify(this)}`);
        const telenorID = this.event && this.event.request && this.event.request.intent && this.event.request.intent.slots && this.event.request.intent.slots.TelenorId && this.event.request.intent.slots.TelenorId.value;
        console.log(`In  TelenorIdIntent ${JSON.stringify(telenorID)} and context is ${this.attributes.context} and ${Messages[this.attributes.context]} message is ${Messages[this.attributes.context].message}`);
        //check fo the telenor id here
        /*telenorID ==`123456` ? this.attributes && this.attributes.context ? 
                                this.emit(':tell',Messages[this.attributes.context].message) : this.emit(':tell',Messages.HELP_MSG)
                             :this.emit(':tell',Messages.TelenorIdNoMatch);*/
        this.attributes && this.attributes.context ? this.emit(':tell',Messages[this.attributes.context]) : this.emit(':tell',Messages.HELP_MSG);
    },
    'PostponeInvoiceContextualIntent': function(){
        console.log(`In  PostponeInvoiceContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'PostponeInvoice';
        this.emit(':ask',Messages.RequestTelenorId);
    },
    'BlockSubscriptionContextualIntent': function(){
        console.log(`In  BlockSubscriptionContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'BlockSubscription';
        this.emit(':ask',Messages.RequestTelenorId);
    },
    'IncreaseBroadBandSpeedContextualIntent': function(){
        console.log(`In  IncreaseBroadBandSpeedContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'IncreaseBroadBandSpeedFor2Months';
        this.emit(':ask',Messages.BroadBandSpeedIncreaseDuration);
    },
    'BroadBandSpeedDurationIntent': function(){
        console.log(`In  BroadBandSpeedDurationIntent ${JSON.stringify(this)}`);
        const numberOfMonths = this.event && this.event.request && this.event.request.intent && this.event.request.intent.slots && this.event.request.intent.slots.NumberOfMonths && this.event.request.intent.slots.NumberOfMonths.value;
        this.emit(':ask',Messages.RequestTelenorId);
    },
    'IncreaseDataPackContextualIntent': function(){
        console.log(`In  IncreaseDataPackContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'IncreaseDataPackBy2GB';
        this.emit(':ask',`${Messages.DataPackCost} ${Messages.RequestTelenorId}`);
    },
    'CheckCurrentInternetStatusContextualIntent': function(){
        console.log(`In  CheckCurrentInternetStatusContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'CurrentInternetStatus';
        this.emit(':ask',Messages.CurrentInternetStatusSMSConfirmation);
    },
    'AMAZON.YesIntent': function(){
        console.log(`In  AMAZON.YesIntent ${JSON.stringify(this)}`);
        console.log(`In  AMAZON.YesIntent ${JSON.stringify(this.attributes)} and message is ${Messages[this.attributes.context].message}`);
        this.attributes && this.attributes.context ? this.emit(':tell',Messages[this.attributes.context]) : this.emit(':tell',Messages.HELP_MSG);
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
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};