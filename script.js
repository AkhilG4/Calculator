function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

let numOne = 0;
let numTwo = 0;
let operator = '';

function operate(numOne, numTwo, operator) {
    switch (operator) {
        case '+':
            return add(numOne,numTwo);
        case '-':
            return subtract(numOne,numTwo);
        case '*':
            return multiply(numOne,numTwo);
        case '/':
            return divide(numOne, numTwo);
        default:
            alert("ERROR")
    }
}