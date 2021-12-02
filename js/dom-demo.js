// // const add = (num1, num2) => num1 + num2;
// // const result = add(5, 8);

// // Method 1
// let headerTitle = document.children[0].children[1].children[0].children[0].children[0];

// // document.children[0].children[1].children[0].children[0].children[0].textContent = result;


// // Method 2
// var headerTag = document.getElementById("headingTitle")
// console.log(headerTag);

// // Method3
// var cardTag = document.getElementsByClassName("card-group")
// console.log(cardTag)

// // Function for autoreresh

// // Get tag
// // Update element

// const myinputBox = document.children[0].children[1].children[0].children[0];
// myinputBox.onInput() = () => {
//     // Fetch data from DB
//     myinputBox.textContent = "result from DB"
// }

const weatherDeterminer = (weather) => {
    if (weather == "Sunny") {
        return 'Just grab a vest'
    } else {
        return 'You might want to bring a jacket'
    }
}

const handleClick = () => {
    const inputBox = document.getElementById("weatherToday")
    const inputValue = inputBox.value;
    const result = weatherDeterminer(inputValue)

    document.getElementById("resultHere").textContent = result;
}