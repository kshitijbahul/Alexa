`use strict`;
const sayAs = {
    "telephone": '<say-as interpret-as="telephone">',
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
};
module.exports = {
    sayAs,
    Welcome_Message :`Welcome to Telenor. I can help you with your Balance, current usage, Internet status. If you want I can also schedule an agent to call you for your invoices`,
    RandomNumberText : `Look what I rolled for you`,
    HELP_MSG :` Can I help you with anything else ?`,
    STOP_MSG : `Bye`,
    TelenorIdNoMatch :`Sorry you did not mention the correct telenor id`,
    ContextualSuccess:`Sure done .${sayAs.whispered} Kshitij I did the other thing as well ${sayAs.amazonEffectEnd}`,
    Master_Message : `Kshitij will always be the master. Ha ha`,
    CurrentBalanceResponseNonContextual:`Your current balance for mobile ${sayAs.telephone}90104005 ${sayAs.sayasEnd} is 500 kroner. ${breaks.five} Your current balance for fixed phone ${sayAs.telephone}67105000 ${sayAs.sayasEnd} is 230 kroner`,
    CurrentUsageResponseNonContextual:`You have now used 1.2 GB of your available 2GB limit for this month`,
    CurrentInternetStatusResponseNonContextual:`We have a registered fault in your area. ${breaks.three} Estimated correction time is today at 14:45`,
    InvoiceCallbackResponseNonContextual:`Our estimated waiting time is 4 minutes. ${breaks.three} Your callback is placed in our queue and you will be contacted by our invoice department shortly`,
    MySubscriptionResponseNonContextual:`You currently are subscribed as ${sayAs.telephone}90104005 ${sayAs.sayasEnd} on a Freedom 2GB plan.${breaks.four}  Based on your current data usage, we recommend upgrading to Freedom 5GB`,
    AreaCoverageResponseNonContextual:`Based on your current location, the best available coverage is 4G+. ${breaks.four}  ${sayAs.whispered}Planned availability of 5G in your area is June 2018 ${sayAs.amazonEffectEnd}`,
    CurrentOffersResponseNonContextual:`This month at telenor you can`,
    CurrentInternetStatusSMSConfirmation:`We have a registered fault in your area. ${breaks.three} Estimated correction time is today at 14:45.  Would you like to receive status updates via SMS?`,
    DataPackCost:`data costs 99 kroner ${breaks.three}`,
    RequestTelenorId :`Please confirm using your registered 6-digit Telenor ID`,
    PostponeInvoice :` Invoice with balance 275 kroner is now postponed. New due date is 01 June`,
    BlockSubscription :` Subscription for ${sayAs.telephone}90104005 ${sayAs.sayasEnd} is now temporarily blocked`,
    BroadBandSpeedIncreaseDuration : `How long do you want the BroadBand to be extended for`,
    DataPackIncreaseByMessage : `How may GBs of data do you need`,
    IncreaseBroadBandSpeedFor2Months :` Your broadband speed is now increased from 50Mbit/s to 100Mbit/s until `,
    IncreaseDataPackBy2GB :` Your available data for mobile ${sayAs.telephone}90104005 ${sayAs.sayasEnd} is now`,
    CurrentInternetStatus :` Status updates will be sent to ${sayAs.telephone}90104005 ${sayAs.sayasEnd}`
}
