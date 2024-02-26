import { addition } from "./addition.js";
import { division } from "./division.js";
import { subtraction } from "./subtraction.js";
import { multiplication } from "./multiplication.js";

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
let numOne = "0";
let numTwo = "0";
let first = false;
let add = false;
let subtract = false;
let divide = false;
let multiply = false;
let count = 0;

let positive = true;

ACBtn.addEventListener('click', () => {
    numOne = "0";
    numTwo = "0";
    first = false;
    init = true;
    userInput.value = "0";
    add = false;
    subtract = false;
    divide = false;
    multiply = false;
    count = 0;
})

equalsBtn.addEventListener('click', () => {
    if (add) {
        userInput.value = addition(numOne, numTwo);
        numOne = addition(numOne, numTwo).toString();
    } else if (divide) {
        userInput.value = division(numOne, numTwo);
        numOne = division(numOne, numTwo).toString();
    } else if (subtract) {
        userInput.value = subtraction(numOne, numTwo);
        numOne = subtraction(numOne, numTwo).toString();
    } else if (multiply) {
        userInput.value = multiplication(numOne, numTwo);
        numOne = multiplication(numOne, numTwo).toString();
    }
    numTwo = "0";
    add = false;
    subtract = false;
    divide = false;
    multiply = false;
    first = false;
})

divisionBtn.addEventListener('click', () => {
    divide = true;
    userInput.value += "/";
    first = true;
    init = true;
})

multiplicationBtn.addEventListener('click', () => {
    multiply = true;
    userInput.value += "*";
    first = true;
    init = true;
})

subtractionBtn.addEventListener('click', () => {
    subtract = true;
    userInput.value += "-";
    first = true;
    init = true;
})

additionBtn.addEventListener('click', () => {
    add = true;
    userInput.value += "+";
    first = true;
    init = true;
})

positiveAndNegativeBtn.addEventListener('click', () => {
    let negative = ["-"];
    if (positive) {
        positive = false;
        if (!first) {
            for (let i = 0; i < numOne.length; i++) {
                negative.push(numOne[i]);
            }
            numOne = negative.join("");
            userInput.value = numOne;
        } else {
            for (let i = 0; i < numTwo.length; i++) {
                negative.push(numTwo[i]);
            }
            numTwo = negative.join("");
            userInput.value = numTwo;
        }
    } else {
        positive = true;
        if (!first) {
            numOne = numOne.replace("-", "");
            userInput.value = numOne;
        } else {
            numTwo = numTwo.replace("-", "");
            userInput.value = numTwo;
        }
    }
})



oneBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "1";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "1";
            userInput.value = numOne;
        }
    } else {
        if (init) {
            numTwo = "1";
            userInput.value += numTwo;
            init = false;
        } else {
            numTwo += "1";
            userInput.value += numTwo;
        }
    }
})

twoBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "2";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "2";
            userInput.value += numOne;
        }
    } else {
        if (init) {
            numTwo = "2";
            userInput.value += "2";
            init = false;
        } else {
            numTwo += "2";
            userInput.value += "2";
        }
    }
})

threeBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "3";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "3";
            userInput.value = numOne;
        }
    } else {
        if (init) {
            numTwo = "3";
            userInput.value = numTwo;
            init = false;
        } else {
            numTwo += "3";
            userInput.value = numTwo;
        }
    }
})

fourBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "4";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "4";
            userInput.value = numOne;
        }
    } else {
        if (init) {
            numTwo = "4";
            userInput.value = numTwo;
            init = false;
        } else {
            numTwo += "4";
            userInput.value = numTwo;
        }
    }
})

fiveBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "5";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "5";
            userInput.value = numOne;
        }
    } else {
        if (init) {
            numTwo = "5";
            userInput.value = numTwo;
            init = false;
        } else {
            numTwo += "5";
            userInput.value = numTwo;
        }
    }
})

sixBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "6";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "6";
            userInput.value = numOne;
        }
    } else {
        if (init) {
            numTwo = "6";
            userInput.value = numTwo;
            init = false;
        } else {
            numTwo += "6";
            userInput.value = numTwo;
        }
    }
})

sevenBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "7";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "7";
            userInput.value = numOne;
        }
    } else {
        if (init) {
            numTwo = "7";
            userInput.value = numTwo;
            init = false;
        } else {
            numTwo += "7";
            userInput.value = numTwo;
        }
    }
})

eightBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "8";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "8";
            userInput.value = numOne;
        }
    } else {
        if (init) {
            numTwo = "8";
            userInput.value = numTwo;
            init = false;
        } else {
            numTwo += "8";
            userInput.value = numTwo;
        }
    }
})

nineBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "9";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "9";
            userInput.value = numOne;
        }
    } else {
        if (init) {
            numTwo = "9";
            userInput.value = numTwo;
            init = false;
        } else {
            numTwo += "9";
            userInput.value = numTwo;
        }
    }
})

zeroBtn.addEventListener('click', () => {
    if (!first) {
        if (init) {
            numOne = "0";
            userInput.value = numOne;
            init = false
        } else {
            numOne += "0";
            userInput.value = numOne;
        }
    } else {
        if (init) {
            numTwo = "0";
            userInput.value = numTwo;
            init = false;
        } else {
            numTwo += "0";
            userInput.value = numTwo;
        }
    }
})


decimalBtn.addEventListener('click', () => {
    if (count < 1) {
        if (!first) {
            numOne += ".";
            userInput.value = numOne;
        } else {
            numTwo += ".";
            userInput.value = numTwo;
        }
    }
    count++;
})