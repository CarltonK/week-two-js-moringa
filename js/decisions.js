// // FOR
// const awesomeArray = ["oranges", "mangoes", "apples"]
// for (let index = 0; index < awesomeArray.length; index++) {
//     const element = awesomeArray[index];
//     // console.log(element.toUpperCase())
// }

// /* this is an example for new snippet extension make by me xD */
// for (const element of awesomeArray) {
//     // console.log(element.toUpperCase())
// }

// awesomeArray.forEach(element => {
//     // console.log(element.toUpperCase())
// })

// // WHILE
// // let values = 10;
// // while (values > 0) {
// //     console.log("Hello")
// //     values = values - 1
// // }

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

function analyzeUserInput() {
    const mpesaMessage = prompt("Enter mpesa message please");

    if (mpesaMessage.includes("paid to")) {
        // Post feedback using alert
        alert(tillNumberAnalyzer(mpesaMessage));
    } else if (mpesaMessage.includes("sent to")) {
        alert('This is a paybill')
    } else {
        alert('This is another transaction type')
    }
}

// Get input using prompt

// // FUNCTIONS
// // Name - tillNumberAnalyzer
// // Arguments
// // Callback 

// // Method 1


// // Method 2
// function payBillAnalyzer(message) {

// }



// class Player {
//     team = "Derby County";
//     jerseyNumber = 10;
//     bootSize = 10;

//     celebration = () => {
//         return "Hi 5 players";
//     }
// }

// const rooney = new Player();
// console.log(rooney.celebration())

// class Circle {
//     pi = 3.1427
//     radius;

//     constructor(radius) {
//         this.radius = radius
//     }

//     getDiameter() {
//         return this.radius * 2
//     }

//     getCircumference() {
//         return 2 * this.pi * this.getDiameter();
//     }
// }

// const smallCircle = new Circle(5);
// const bigCircle = new Circle(50);

// console.log(bigCircle.getCircumference())