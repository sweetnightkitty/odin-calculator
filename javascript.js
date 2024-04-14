let firstNumber;
let secondNumber;

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

