let ACBtn = document.getElementById("ACBtn");
let positiveAndNegativeBtn = document.getElementById("positiveAndNegativeBtn");
let percentBtn = document.getElementById("percentBtn");
let divisionBtn = document.getElementById("divisionBtn");
let sevenBtn = document.getElementById("sevenBtn");
let eightBtn = document.getElementById("eightBtn");
let nineBtn = document.getElementById("nineBtn");
let multiplicationBtn = document.getElementById("multiplicationBtn");
let fourBtn = document.getElementById("fourBtn");
let fiveBtn = document.getElementById("fiveBtn");
let sixBtn = document.getElementById("sixBtn");
let subtractionBtn = document.getElementById("subtractionBtn");
let oneBtn = document.getElementById("oneBtn");
let twoBtn = document.getElementById("twoBtn");
let threeBtn = document.getElementById("threeBtn");
let additionBtn = document.getElementById("additionBtn");
let zeroBtn = document.getElementById("zeroBtn");
let decimalBtn = document.getElementById("decimalBtn");
let equalsBtn = document.getElementById("equalsBtn");
let userInput = document.getElementById("userInput");

let numOne = "";
let numTwo = "";
let first = false;
let dot = false;
let count = 0;

ACBtn.addEventListener('click', () => {
    numOne = 0;
    numTwo = 0;
    first = true;
    userInput.value = "0";
    dot = false;
})

oneBtn.addEventListener('click', () => {
    if (!first) {
        numOne += "1";
        userInput.value = numOne;
    }  else {
        numTwo += "1";
        userInput.value = numTwo;
    }
})


decimalBtn.addEventListener('click', () => {
    count++;
    if (count < 1) {
        dot = true;
        userInput.value += ".";
    }
})