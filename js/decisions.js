// IFs


// FOR
const awesomeArray = ["oranges", "mangoes", "apples"]
for (let index = 0; index < awesomeArray.length; index++) {
    const element = awesomeArray[index];
    // console.log(element.toUpperCase())
}

/* this is an example for new snippet extension make by me xD */
for (const element of awesomeArray) {
    // console.log(element.toUpperCase())
}

awesomeArray.forEach(element => {
    // console.log(element.toUpperCase())
})

// WHILE
// let values = 10;
// while (values > 0) {
//     console.log("Hello")
//     values = values - 1
// }

const tillNumberAnalyzer = (message) => {
    // Placeholder variables
    let code, amount, day, till

    const initialSplitter = message.split(" Confirmed. ");
    code = initialSplitter[0];

    const rightHandside = initialSplitter[1];
    const secondarySplitter = rightHandside.split(" paid to ");
    amount = secondarySplitter[0].replace("Ksh", '')

    till = secondarySplitter[1].split(". on ")[0]
    day = secondarySplitter[1].split(". on ")[1].split(".New ")[0];
    return till;
}

const mpesaMessage = "XXXYYYZZZ4 Confirmed. Ksh607.00 paid to SUPERMARKET FULANI HAPO. on 23/4/21 at 3:26 PM.New M-PESA balance is "
"Ksh6,494.22. Transaction cost, Ksh0.00. Amount you can transact within the day is 296,813.00.You can now access M-PESA via *334#";
if (mpesaMessage.includes("paid to")) {
    console.log(tillNumberAnalyzer(mpesaMessage));
} else if (mpesaMessage.includes("sent to")) {

} else {

}

// FUNCTIONS
// Name - tillNumberAnalyzer
// Arguments
// Callback 

// Method 1


// Method 2
function payBillAnalyzer(message) {

}