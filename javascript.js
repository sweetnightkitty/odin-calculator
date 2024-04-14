let firstNumber;
let secondNumber;
const display = document.querySelector("#screen");
const clear = document.querySelector("#clear");
const numberButtons = document.querySelectorAll(".num");

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
    firstNumber = 0;
});


numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let newValue = button.textContent;
        if(display.textContent == 0) {
            display.textContent = newValue;
            firstNumber = newValue;
        } else {
            display.textContent += newValue;
            firstNumber += newValue;
        };
    })
});