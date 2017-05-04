`use strict`;
const sayAs = {
    "telephone": '<say-as interpret-as="telephone">',
    "sayasEnd" : '</say-as>'
};
const breaks = {
    "three" :'<break time="3s"/> ',
    "four" :'<break time="4s"/> ',
    "five" :'<break time="5s"/> ',
    "eight" :'<break time="8s"/> ',
};
module.exports = {
    Welcome_Message :`I have started up`,
    RandomNumberText : `Look what I rolled for you`,
    HELP_MSG :` A help message`,
    STOP_MSG : `Bye`,
    Master_Message : `Kshitij will always be the master. Ha ha`,
    CurrentBalanceResponseNonContextual:`Your current balance for mobile ${sayAs.telephone}90104005${sayAs.sayasEnd} is 500 kroner. ${breaks.five} Your current balance for fixed phone ${sayAs.telephoned}67105000 ${sayAs.sayasEnd} is 230 kroner`,
    CurrentUsageResponseNonContextual:`You have now used 1.2 GB of your available 2GB limit for this month`,
    CurrentInternetStatusResponseNonContextual:`We have a registered fault in your area. ${breaks.three} Estimated correction time is today at 14:45`,
    InvoiceCallbackResponseNonContextual:`Our estimated waiting time is 4 minutes. ${breaks.three} Your callback is placed in our queue and you will be contacted by our invoice department shortly`,
    MySubscriptionResponseNonContextual:`You currently are subscribed as 90104005 on a Freedom 2GB plan.${breaks.four}  Based on your current data usage, we recommend upgrading to Freedom 5GB`,
    AreaCoverageResponseNonContextual:`Based on your current location, the best available coverage is 4G+. ${breaks.four}  Planned availability of 5G in your area is June 2018`,
    CurrentOffersResponseNonContextual:`This month at telenor you can`,

}
