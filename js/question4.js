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

let numOne = 0;
let numTwo = 0;
let first = false;
let dot = false;

ACBtn.addEventListener('click', () => {
    numOne = 0;
    numTwo = 0;
    first = true;
    userInput.value = 0;
    dot = false;
})

oneBtn.addEventListener('click', () => {
    if(!first){
        numOne = 1;
        userInput.value = 1;
        first = true;
        if(dot){
            userInput.value += 1;
        }
    } else {
        numTwo = 1;
        userInput.value = 1;
        first = false;
        if(dot){
            userInput.value += 1;
        }
    }
})

twoBtn.addEventListener('click', () => {
    if(!first){
        numOne = 2;
        userInput.value = 2;
        first = true;
        if(dot){
            userInput.value += 2;
        }
    } else {
        numTwo = 2;
        userInput.value = 2;
        first = false;
        if(dot){
            userInput.value += 2;
        }
    }
})

threeBtn.addEventListener('click', () => {
    if(!first){
        numOne = 3;
        userInput.value = 3;
        first = true;
        if(dot){
            userInput.value += 3;
        }
    } else {
        numTwo = 3;
        userInput.value = 3;
        first = false;
        if(dot){
            userInput.value += 3;
        }
    }
})

fourBtn.addEventListener('click', () => {
    if(!first){
        numOne = 4;
        userInput.value = 4;
        first = true;
        if(dot){
            userInput.value += 4;
        }
    } else {
        numTwo = 4;
        userInput.value = 4;
        first = false;
        if(dot){
            userInput.value += 4;
        }
    }
})

fiveBtn.addEventListener('click', () => {
    if(!first){
        numOne = 5;
        userInput.value = 5;
        first = true;
        if(dot){
            userInput.value += 5;
        }
    } else {
        numTwo = 5;
        userInput.value = 5;
        first = false;
        if(dot){
            userInput.value += 5;
        }
    }
})

sixBtn.addEventListener('click', () => {
    if(!first){
        numOne = 6;
        userInput.value = 6;
        first = true;
        if(dot){
            userInput.value += 6;
        }
    } else {
        numTwo = 6;
        userInput.value = 6;
        first = false;
        if(dot){
            userInput.value += 6;
        }
    }
})

sevenBtn.addEventListener('click', () => {
    if(!first){
        numOne = 7;
        userInput.value = 7;
        first = true;
        if(dot){
            userInput.value += 7;
        }
    } else {
        numTwo = 7;
        userInput.value = 7;
        first = false;
        if(dot){
            userInput.value += 7;
        }
    }
})

eightBtn.addEventListener('click', () => {
    if(!first){
        numOne = 8;
        userInput.value = 8;
        first = true;
        if(dot){
            userInput.value += 8;
        }
    } else {
        numTwo = 8;
        userInput.value = 8;
        first = false;
        if(dot){
            userInput.value += 8;
        }
    }
})

nineBtn.addEventListener('click', () => {
    if(!first){
        numOne = 9;
        userInput.value = 9;
        first = true;
        if(dot){
            userInput.value += 9;
        }
    } else {
        numTwo = 9;
        userInput.value = 9;
        first = false;
        if(dot){
            userInput.value += 9;
        }
    }
})

zeroBtn.addEventListener('click', () => {
    if(!first){
        numOne = 0;
        userInput.value = 0;
        first = true;
        if(dot){
            userInput.value += 0;
        }
    } else {
        numTwo = 0;
        userInput.value = 0;
        first = false;
        if(dot){
            userInput.value += 0;
        }
    }
})

decimalBtn.addEventListener('click', () => {
    dot = true;
})