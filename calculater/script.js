let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');


function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}


function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}


function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    display.value = currentInput;
}


function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.value = '';
}
