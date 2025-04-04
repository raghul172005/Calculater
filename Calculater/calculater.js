let currentInput = '';
let previousInput = '';
let operator = '';

function updateDisplay() {
    document.getElementById('display').textContent = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);

    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = curr !== 0 ? prev / curr : 'Error'; break;
        default: return;
    }
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateSquareRoot() {
    if (currentInput !== '') {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

function calculateTrig(func) {
    if (currentInput !== '') {
        let value = parseFloat(currentInput);
        switch (func) {
            case 'sin': currentInput = Math.sin(value * Math.PI / 180).toString(); break;
            case 'cos': currentInput = Math.cos(value * Math.PI / 180).toString(); break;
            case 'tan': currentInput = Math.tan(value * Math.PI / 180).toString(); break;
        }
        updateDisplay();
    }
}
