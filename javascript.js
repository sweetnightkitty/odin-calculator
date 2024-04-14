let firstNumber;
let secondNumber;
let operator;
let currentNumber;
let toggleStatus = "first";

const display = document.querySelector("#screen");
const clear = document.querySelector("#clear");
const numberButtons = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function runOperation(firstNumber, secondNumber, operator) {
    if(operator === "add") {
        return add(firstNumber, secondNumber);
    } else if(operator === "multiply") {
        return multiply(firstNumber, secondNumber);
    } else if(operator === "divide") {
        return divide(firstNumber, secondNumber);
    } else if(operator === "subtract") {
        return subtract(firstNumber, secondNumber);
    };
};

clear.addEventListener("click", () => {
    display.textContent = 0;
    if(toggleStatus === "first") {
        firstNumber = 0;
    } else if(toggleStatus === "second") {
        secondNumber = 0;
    }
});

clear.addEventListener("dblclick", () => {
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = undefined;
})

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let newValue = button.textContent;

        if(display.textContent == 0 || currentNumber === "reset") {
            display.textContent = newValue;
            currentNumber = newValue;
        } else {
            display.textContent += newValue;
            currentNumber += newValue;
        };

        assignCurrentNumber(currentNumber);
    })
});

operators.forEach((option) => {
    option.addEventListener("click", () => {
        if(toggleStatus === "second") {
            firstNumber = runOperation(firstNumber, secondNumber, operator);
            display.textContent = firstNumber;
        } else if(toggleStatus === "first") {
            switchToggleStatus();
        };
        operator = option.id;
        currentNumber = "reset";

    })
});

function assignCurrentNumber(currentNumber) {
    //currentNumber is passed to the function as a string
    currentNumber = parseInt(currentNumber); 
    if(toggleStatus === "first") {
        firstNumber = currentNumber;
    } else if(toggleStatus === "second") {
        secondNumber = currentNumber;
    };
};

equals.addEventListener("click", () => {
    display.textContent = runOperation(firstNumber, secondNumber, operator);
});

function switchToggleStatus() {
    if(toggleStatus === "first") {
        toggleStatus = "second";
    } else if(toggleStatus === "second") {
        toggleStatus = "first";
    };
};