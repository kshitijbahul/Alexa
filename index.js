'use strict';

const Alexa=require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.d42a1475-25c6-41c5-93a5-9a4b02c6be65';
const Messages = require('./telenormessages'); 
var moment = require('moment');
const envVariables = require ('./enviornmentVariables');

const handlers = {
    'LaunchRequest' : function(){
        this.attributes['context'] = 'LaunchRequest';
        this.attributes['welcomeMessage'] = true;
        this.emit(`CheckCurrentInternetStatusContextualIntent`);
    },
    'GetYourMaster' : function(){
        console.log(`${Messages.Master_Message} in GetYourMasterIntent the event is ${JSON.stringify(this)}`)
        this.emit(':ask',`${Messages.Master_Message} ${Messages.HELP_MSG_PAUSED}`);
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
        this.attributes['context'] = 'CheckCurrentBalanceNonContextualIntent';
        this.emit(':ask',`${Messages.CurrentBalanceResponseNonContextual} `,Messages.HELP_MSG)
    },
    'CheckCurrentUsageNonContextualIntent': function(){
        console.log(`In  CheckCurrentUsageNonContextualIntent ${JSON.stringify(this)}`);
        this.attributes.context ='CheckCurrentUsageNonContextualIntent';
        this.emit(':ask',`${Messages.CurrentUsageResponseNonContextual} `,Messages.HELP_MSG)
    },
    'CheckCurrentInternetStatusNonContextualIntent': function(){
        console.log(`In  CheckCurrentInternetStatusNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':ask',`${Messages.CurrentInternetStatusResponseNonContextual} ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG)
    },
    'InvoiceCallbackNonContextualIntent': function(){
        console.log(`In  InvoiceCallbackNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':ask',`${Messages.InvoiceCallbackResponseNonContextual} ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG)
    },
    'CheckCoverageInAreaNonContextualIntent': function(){
        console.log(`In  CheckCoverageInAreaNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':ask',`${Messages.AreaCoverageResponseNonContextual} ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG)
    },
    'CheckSubscriptionNonContextualIntent': function(){
        console.log(`In  CheckSubscriptionNonContextualIntent ${JSON.stringify(this)}`);
        this.emit(':ask',`${Messages.MySubscriptionResponseNonContextual} ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG)
    },
    'CheckOffersNonContextualIntent': function(){
        console.log(`In  CheckOffersNonContextualIntent ${JSON.stringify(this)}`);
        this.attributes.context ='CheckOffersNonContextualIntent';
        this.emit(':ask',`${Messages.CurrentOffersResponseNonContextual} ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG)
    },
    'TelenorIdIntent': function(){
        console.log(`In  TelenorIdIntent ${JSON.stringify(this)}`);
        const telenorID = this.event && this.event.request && this.event.request.intent && this.event.request.intent.slots && this.event.request.intent.slots.TelenorId && this.event.request.intent.slots.TelenorId.value;
        if(!telenorID){
            this.emit(':ask', `${Messages.NoTelenorIdMentioned}`,`${Messages.NoTelenorIdMentioned}`)
        }else if (telenorID && telenorID!='123456'){
            this.emit(':ask', `${Messages.sayAs.digits} ${telenorID} ${Messages.sayAs.sayasEnd} ${Messages.InvalidTelenorId}`,`${Messages.sayAs.digits} ${telenorID} ${Messages.sayAs.sayasEnd} ${Messages.InvalidTelenorId}`)
        }
        console.log(`In  TelenorIdIntent ${JSON.stringify(telenorID)} and context is ${this.attributes.context} and ${Messages[this.attributes.context]} message is ${Messages[this.attributes.context]}`);
        if(this.attributes && this.attributes.context && this.attributes.context == 'IncreaseBroadBandSpeedFor2Months'){
            console.log(`Its IncreaseBroadBandSpeedFor2Months that invoked the telenorIdIntent`);
            console.log(`Its IncreaseBroadBandSpeedFor2Months Checking moment.js ${moment()} and adding months ${moment().add(this.attributes.numberOfMonths,'M')}`);
            console.log(`${Messages[this.attributes.context]} ${Messages.sayAs.date} ${moment().add(this.attributes.numberOfMonths,'M').format('LL')} ${Messages.sayAs.sayasEnd}`);
            this.emit(':ask',`${Messages[this.attributes.context]} ${moment().add(this.attributes.numberOfMonths,'M').format('LL')} ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG);
        } else if(this.attributes && this.attributes.context && this.attributes.context == 'IncreaseDataPackBy2GB'){
            console.log(`Its IncreaseDataPackBy2GB that invoked the telenorIdIntent`);
            console.log(`${Messages[this.attributes.context]} ${Messages.sayAs.date} ${moment().add(this.attributes.numberOfMonths,'M').format('LL')} ${Messages.sayAs.sayasEnd}`);
            this.emit(':ask',`${Messages[this.attributes.context]} ${parseInt(this.attributes['numberOfGigs'])+1.2}GB ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG);
        }
        this.attributes && this.attributes.context ? this.emit(':ask',`${Messages[this.attributes.context]} ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG) : this.emit(':ask',Messages.HELP_MSG);
    },
    'PostponeInvoiceContextualIntent': function(){
        console.log(`In  PostponeInvoiceContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'PostponeInvoice';
        this.emit(':ask',`${Messages.RequestTelenorId}`,Messages.RequestTelenorId);
    },
    'BlockSubscriptionContextualIntent': function(){
        console.log(`In  BlockSubscriptionContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'BlockSubscription';
        this.emit(':ask',`${Messages.RequestTelenorId}`,Messages.RequestTelenorId);
    },
    'IncreaseBroadBandSpeedContextualIntent': function(){
        console.log(`In  IncreaseBroadBandSpeedContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'IncreaseBroadBandSpeedFor2Months';
        this.emit(':ask',Messages.BroadBandSpeedIncreaseDuration,Messages.BroadBandSpeedIncreaseDuration);
    },
    'BroadBandSpeedDurationIntent': function(){
        console.log(`In  BroadBandSpeedDurationIntent ${JSON.stringify(this)}`);
        const numberOfMonths = this.event && this.event.request && this.event.request.intent && this.event.request.intent.slots && this.event.request.intent.slots.NumberOfMonths && this.event.request.intent.slots.NumberOfMonths.value;
        this.attributes['numberOfMonths'] = numberOfMonths;
        this.emit(':ask',Messages.RequestTelenorId,Messages.RequestTelenorId);
    },
    'IncreaseDataPackContextualIntent': function(){
        console.log(`In  IncreaseDataPackContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'IncreaseDataPackBy2GB';
        this.emit(":ask",`${Messages.DataPackIncreaseByMessage}`,`${Messages.DataPackIncreaseByMessage}`);
        //
    },
    'NumberOfGigsIntent': function(){
        this.attributes['numberOfGigs'] = this.event && this.event.request && this.event.request.intent && this.event.request.intent.slots && this.event.request.intent.slots.NumberOfGigs && this.event.request.intent.slots.NumberOfGigs.value;;
        console.log(`In  NumberOfGigsIntent ${JSON.stringify(this)} and Gigs are ${this.attributes['numberOfGigs']}`);
        this.emit(':ask',`${this.attributes['numberOfGigs']}GB ${Messages.DataPackCost} ${Messages.RequestTelenorId}`,`${Messages.DataPackCost} ${Messages.RequestTelenorId}`);
    },
    'CheckCurrentInternetStatusContextualIntent': function(){
        var welcomeMessage = this.attributes.context == 'LaunchRequest' ? `${Messages.Salutation} ${envVariables.CurrentUser} ${Messages.breaks.twoHundred} `:'';
        console.log(`In  CheckCurrentInternetStatusContextualIntent ${JSON.stringify(this)}`);
        this.attributes['context'] = 'CurrentInternetStatus';
        this.emit(':ask',`${welcomeMessage} ${Messages.CurrentInternetStatusSMSConfirmation}`,`${Messages.CurrentInternetStatusSMSConfirmation}`);
    },
    'ContactMeIntent': function () {
        console.log(`In  ContactMeIntent ${JSON.stringify(this)}`);
        this.emit(':ask', `${Messages.ContactUserMessage} ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG);
    },
    'SkillInformation': function () {
        console.log(`In  SkillInformation ${JSON.stringify(this)}`);
        this.emit(':ask', `${Messages.SkillInformation} ${Messages.HELP_MSG_PAUSED}`,Messages.HELP_MSG);
    },
    'AMAZON.YesIntent': function(){
        console.log(`In  AMAZON.YesIntent ${JSON.stringify(this)}`);
        console.log(`In  AMAZON.YesIntent ${JSON.stringify(this.attributes)} and message is ${Messages[this.attributes.context]}`);
        console.log(Messages[`${this.attributes.context}YesIntent`]);
        var message = this.attributes.context && this.attributes.context == 'CurrentInternetStatus' && this.attributes.welcomeMessage 
                        ? `${Messages[this.attributes.context+"YesIntent"]} ${Messages.breaks['1s']}${Messages.CompressedMessage}` : '';
        this.attributes.welcomeMessage ? this.attributes.welcomeMessage= false: '';
        this.attributes.context == 'CurrentInternetStatus' && message ? this.emit(':ask',message) : '' ;
        this.attributes.context=='CheckCurrentBalanceNonContextualIntent' ? this.emit('CheckCurrentUsageNonContextualIntent') : '' ;
        this.attributes.context=='CheckCurrentUsageNonContextualIntent' ? this.emit('IncreaseDataPackContextualIntent') : '' ;
        console.log(`In  AMAZON.YesIntent after !! ${JSON.stringify(this)}`);
        //this.attributes && this.attributes.context ? this.emit(':tell',Messages[this.attributes.context],Messages.HELP_MSG) : this.emit(':tell',`I don't know what you aare saying yes to. ${Messages.HELP_MSG}`);
         this.emit(':ask',this.attributes && this.attributes.context ? `${Messages[this.attributes.context+"YesIntent"]} ${Messages.HELP_MSG_PAUSED}`: `I don't know what you are saying yes to. ${Messages.CompressedMessage}`,Messages.HELP_MSG);
    },
    'AMAZON.HelpIntent': function () {
        console.log(`In  AMAZON.HelpIntent ${JSON.stringify(this)}`);
        this.emit(':ask', Messages.HELP_MESSAGE);
    },
    'AMAZON.CancelIntent': function () {
        console.log('Came in here in CancelIntent')
        this.emit(':tell', Messages.STOP_MESSAGE);
    },
    'AMAZON.NoIntent' : function(){
        console.log(`Came in here in No Intent ${JSON.stringify(this)}`);
        console.log('The nointent message is ',Messages[this.attributes.context+'NoIntent']);
        var message = '';
        var promptMessage = '';
        if (this.attributes.NoContext){
            this.attributes.NoContext = false;
            this.emit('AMAZON.StopIntent')  ;
        }
        this.attributes.context=='CheckCurrentUsageNonContextualIntent' ? this.emit('CheckOffersNonContextualIntent') : '' ;
        if(this.attributes.context && this.attributes.context == 'CurrentInternetStatus' && this.attributes.welcomeMessage){
            console.log(`Entered if in No contetnt i.e we are still in welcome flow  ${Messages[this.attributes.context+'NoIntent']} ${Messages.CompressedMessage}`);
            message = `${Messages[this.attributes.context+'NoIntent']} ${Messages.breaks.twoHundred} ${Messages.CompressedMessage}`;
            this.attributes.context ='';
            this.attributes.welcomeMessage = false;
            //promptMessage = Messages.HELP_MSG;
            this.emit(':ask',message ,Messages.HELP_MSG);
        } else if (! Messages[this.attributes.context+'NoIntent']) {
            console.log(`Here in No Intent could not find the no message for ${this.attributes.context}`);
            this.attributes['NoContext'] = true;
            this.emit(':ask',Messages.HELP_MSG,Messages.HELP_MSG);
        } 
        else {
           Messages[this.attributes.context+'NoIntent'] ? this.emit(':ask',`${Messages[this.attributes.context+'NoIntent']} ${Messages.HELP_MSG_PAUSED}` ,Messages.HELP_MSG) 
                                                              : this.emit('AMAZON.StopIntent')  ;
        }
    },
    'AMAZON.StopIntent': function () {
        console.log(`Came in here in StopIntent ${JSON.stringify(this)}`)
        this.emit(':tell', Messages.STOP_MSG);
    },
    'SessionEndedRequest': function () {
        console.log('Came in here in SessionEndedRequest')
        this.emit(':tell', Messages.STOP_MESSAGE);
    }
};
exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
    //TODO
    // Multiple States
    // Multiple registerHandlers
    // Display Cards
};