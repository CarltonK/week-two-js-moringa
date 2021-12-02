const header = document.children[0].children[1].children[10].textContent;
console.log(header)
    // const tillNumberAnalyzer = (message) => {
    //     // Placeholder variables
    //     let code, amount, day, till;

//     const initialSplitter = message.split(" Confirmed. ");
//     code = initialSplitter[0];

//     const rightHandside = initialSplitter[1];
//     const secondarySplitter = rightHandside.split(" paid to ");
//     amount = secondarySplitter[0].replace("Ksh", '')

//     till = secondarySplitter[1].split(". on ")[0]
//     day = secondarySplitter[1].split(". on ")[1].split(".New ")[0];
//     return { till, day, code, amount };
// }

// function analyzeUserInput() {
//     const mpesaMessage = prompt("Enter mpesa message please");

//     if (mpesaMessage.includes("paid to")) {
//         // Post feedback using alert
//         alert(tillNumberAnalyzer(mpesaMessage));
//     } else if (mpesaMessage.includes("sent to")) {
//         alert('This is a paybill')
//     } else {
//         alert('This is another transaction type')
//     }
// }

// // Function as a statement
// function Add(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// // Function as an expression
// let add = function a(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// // Arrow function
// var add = (num1, num2) => num1 + num2;


// tillNumberAnalyzer()
// analyzeUserInput()