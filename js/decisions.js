// IFs
const weatherToday = "XXXYYYZZZ4 Confirmed. Ksh607.00  SUPERMARKET FULANI HAPO. on 23/4/21 at 3:26 PM.New M-PESA balance is Ksh6,494.22. Transaction cost, Ksh0.00. Amount you can transact within the day is 296,813.00.You can now access M-PESA via *334#";
if (weatherToday.includes("paid to")) {
    console.log("It's raining")
} else if (weatherToday.includes("sent to")) {
    console.log("It's not raining")
} else {
    console.log("It's not raining!!!!!!!")
}

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
let values = 10;
while (values > 0) {
    console.log("Hello")
    values = values - 1
}