`use strict`;
const moment=require('moment-timezone');
const _=require('lodash');
const envVariables=require('./enviornmentVariables');
const salutation = moment().tz(envVariables.TimeZone).format('HH') <12 ? 'Good Morning' : (moment().format('HH') <16 ? 'Good Afternoon':'Good Evening');
const salutationEnd = moment().tz(envVariables.TimeZone).format('HH') <12 ? 'Day' : (moment().format('HH') <16 ? 'Afternoon': (moment().format('HH') <20 ? 'Evening':'Night'));
const sayAs = {
    "telephone": '<say-as interpret-as="telephone">',
    "digits": '<say-as interpret-as="digits">',
    "date": '<say-as interpret-as="date" format="mdy">',
    "sayasEnd" : '</say-as>',
    "whispered":'<amazon:effect name="whispered">',
    "amazonEffectEnd" :"</amazon:effect>"
};
const breaks = {
    "one" :'<break time="1ms"/> ',
    "two" :'<break time="2ms"/> ',
    "three" :'<break time="3ms"/> ',
    "four" :'<break time="4ms"/> ',
    "five" :'<break time="5ms"/> ',
    "eight" :'<break time="8ms"/> ',
    "ten" :'<break time="10ms"/> ',
    "fifteen" :'<break time="15ms"/> ',
    "twenty" :'<break time="20ms"/> ',
    "fifty" :'<break time="50ms"/> ',
    "hundred" :'<break time="100ms"/> ',
    "twoHundred" :'<break time="200ms"/> ',
    "fiveHundred" :'<break time="500ms"/> ',
    "eightHundred" :'<break time="800ms"/> ',
    "1s" :'<break time="1s"/> ',
    "2s" :'<break time="2s"/> ',
    "3s" :'<break time="3s"/> ',
};
module.exports = {
    breaks,
    sayAs,
    Salutation : salutation,
    WarmWelcomeSatus : `There are no registered faults in your area`,
    NoTelenorIdMentioned : `You did not mention a TelenorID, Could you mention the TelenorID again please ?`,
    InvalidTelenorId: `is not your TelenorID, do you want to try again ?`,
    WelcomeMessage :`Welcome to Telenor. ${breaks.twoHundred}`,
    CompressedMessage : `Here's what I can do for you.${breaks.fifty} I can help you check your balance , get your current internet usage and much more.${breaks.hundred} What would you like to do ?`,
    Welcome_Message :`Welcome to Telenor. I can help you with your Balance, current usage, Internet status. If you want I can also schedule an agent to call you for your invoices`,
    RandomNumberText : `Look what I rolled for you`,
    HELP_MSG_PAUSED : `${breaks.hundred}Can I help you with anything else ?`,
    HELP_MSG :` Can I help you with anything else ?`,
    STOP_MSG : `Goodbye ,Have a nice ${salutationEnd}`,
    TelenorIdNoMatch :`Sorry you did not mention the correct telenorID`,
    ContextualSuccess:`Sure done .${sayAs.whispered} Kshitij I did the other thing as well ${sayAs.amazonEffectEnd}`,
    Master_Message : `Kshitij will always be the master. Ha ha`,
    CurrentBalanceResponseNonContextual:`Your current balance for mobile ${sayAs.telephone}90104005 ${sayAs.sayasEnd} is 500 kroner. ${breaks.five} Your current balance for fixed phone ${sayAs.telephone}67105000 ${sayAs.sayasEnd} is 230 kroner.`,
    CurrentUsageResponseNonContextualFirstPart:`You have now used 1.2 GB of your available`,
    CurrentUsageResponseNonContextualSecondPart:`GB limit for this month ${breaks.fifteen}. Would you want to increase your Data pack`,
    CurrentInternetStatusResponseNonContextual:`We have a registered fault in your area. ${breaks.three} Estimated correction time is today at 14:45`,
    InvoiceCallbackResponseNonContextual:`Our estimated waiting time is 4 minutes. ${breaks.three} Your callback is placed in our queue and you will be contacted by our invoice department shortly`,
    MySubscriptionResponseNonContextual:`You currently are subscribed as ${sayAs.telephone}90104005 ${sayAs.sayasEnd} on a Freedom 2GB plan.${breaks.four}  Based on your current data usage, we recommend upgrading to Freedom 5GB. Do you want to increase your data pack ?`,
    AreaCoverageResponseNonContextual:`Based on your current location, the best available coverage is 4G+. ${breaks.four}  Planned availability of 5G in your area is June 2018 `,
    CurrentOffersResponseNonContextual:`This month at telenor you can Upgrade to 3GB for 299 kroner per month, 15 GB for 499 kroner per Month. Would you want to increase your Data pack`,
    CurrentInternetStatusSMSConfirmation:`We have a registered fault in your area. ${breaks.three} Estimated correction time is today at 14:45.  Would you like to receive status updates via SMS?`,
    DataPackCost:`data costs 99 kroner ${breaks.three}`,
    RequestTelenorId :`Please confirm using your registered 6-digit TelenorID`,
    PostponeInvoice :` Invoice with balance 275 kroner is now postponed. ${breaks.fifty}New due date is `,
    PostponeInvoice_Humor :`${breaks.fifty} ${sayAs.whispered} ${sayAs.sayasEnd}`,
    BlockSubscription :` Subscription for ${sayAs.telephone}90104005 ${sayAs.sayasEnd} is now temporarily blocked`,
    BroadBandSpeedIncreaseDuration : `How long do you want the BroadBand to be extended for`,
    DataPackIncreaseByMessage : `How may GBs of data do you need`,
    IncreaseBroadBandSpeedFor2Months :` Your broadband speed is now increased from 50Mbit/s to 100Mbit/s until `,
    IncreaseDataPackBy2GB :` Your available data for mobile ${sayAs.telephone}90104005 ${sayAs.sayasEnd} is now`,
    CurrentInternetStatusYesIntent :` Status updates will be sent to ${sayAs.telephone}90104005 ${sayAs.sayasEnd}`,
    CurrentInternetStatusNoIntent :``,
    ContactUserMessage :` I have placed the request and you will be shortly contacted by our customer service team.`,
    SkillInformation : `This skill has been Built by Miles India`,
    AboutTelenor : `Telenor Group  is a Norwegian multinational telecommunications company headquartered at Fornebu in Bærum, close to Oslo. 
                    ${breaks.fifty}It is one of the world's largest mobile telecommunications companies with operations in Scandinavia, Eastern Europe and Asia. 
                    ${breaks.fifty}It has extensive broadband and TV distribution operations in four Nordic countries, and a 10-year-old research and business line for Machine-to-Machine technology. 
                    ${breaks.fifty}Telenor owns networks in 13 countries, and has operations in 29 countries.`,
    CompleteHelpMessage:`I can help you ${breaks.fifty} Check your current balance, 
                                        ${breaks.fifty} your current Internet Usage,  
                                        ${breaks.fifty} Postpone your invoice or ask Telenor to call you regarding it,        
                                        ${breaks.fifty} Check your subscription, 
                                        ${breaks.fifty} Check network coverage in your area,         
                                        ${breaks.fifty} Increase your broadband speed ,
                                        ${breaks.fifty} Increase your Data Pack speed ,
                                        ${breaks.fifty} ask telenor to contact you , ${breaks.hundred} What would you like to do ? `
}
