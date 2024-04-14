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


numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let newValue = button.textContent;

        if(display.textContent == 0) {
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
        operator = option.id;
    })
});

function assignCurrentNumber(currentNumber) {
    if(toggleStatus === "first") {
        firstNumber = currentNumber;
    } else if(toggleStatus === "second") {
        secondNumber = currentNumber;
    };
};

equals.addEventListener("click", () => {
    display.textContent = runOperation(firstNumber, secondNumber, operator);
});