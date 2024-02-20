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

let init = true;
let numOne;
let numTwo;
let first = false;
let dot = false;
let count = 0;

ACBtn.addEventListener('click', () => {
    numOne = 0;
    numTwo = 0;
    init = true;
    first = true;
    userInput.value = 0;
    dot = false;
})

oneBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "1";
            userInput.value = numOne;
        } else {
            numOne += "1";
            userInput.value = numOne;
        }
        init = false;
    } else {
        if (init) {
            numTwo = "1";
            userInput.value = numTwo;
        } else {
            numTwo += "1";
            userInput.value = numTwo;
        }
        init = false;
    }
})

twoBtn.addEventListener('click', () => {
    if (!first) {
        numOne = 2;
        userInput.value = 2;
        first = true;
    } else {
        numTwo = 2;
        userInput.value = 2;
        first = false;
    }
})

threeBtn.addEventListener('click', () => {
    if (!first) {
        numOne = 3;
        userInput.value = 3;
        first = true;
    } else {
        numTwo = 3;
        userInput.value = 3;
        first = false;
    }
})

fourBtn.addEventListener('click', () => {
    if (!first) {
        numOne = 4;
        userInput.value = 4;
        first = true;
    } else {
        numTwo = 4;
        userInput.value = 4;
        first = false;
    }
})

fiveBtn.addEventListener('click', () => {
    if (!first) {
        numOne = 5;
        userInput.value = 5;
        first = true;
    } else {
        numTwo = 5;
        userInput.value = 5;
        first = false;
    }
})

sixBtn.addEventListener('click', () => {
    if (!first) {
        numOne = 6;
        userInput.value = 6;
        first = true;
    } else {
        numTwo = 6;
        userInput.value = 6;
        first = false;
    }
})

sevenBtn.addEventListener('click', () => {
    if (!first) {
        numOne = 7;
        userInput.value = 7;
        first = true;
    } else {
        numTwo = 7;
        userInput.value = 7;
        first = false;
    }
})

eightBtn.addEventListener('click', () => {
    if (!first) {
        numOne = 8;
        userInput.value = 8;
        first = true;
    } else {
        numTwo = 8;
        userInput.value = 8;
        first = false;
    }
})

nineBtn.addEventListener('click', () => {
    if (!first) {
        numOne = 9;
        userInput.value = 9;
        first = true;
    } else {
        numTwo = 9;
        userInput.value = 9;
        first = false;
    }
})

zeroBtn.addEventListener('click', () => {
    if (!first) {
        numOne = 0;
        userInput.value = 0;
        first = true;
    } else {
        numTwo = 0;
        userInput.value = 0;
        first = false;
    }
})

decimalBtn.addEventListener('click', () => {
    
})