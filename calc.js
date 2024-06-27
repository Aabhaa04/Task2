document.getElementById('multiplyButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const multiplicationResult = multiplyNumbers(num1, num2);
    document.getElementById('result').textContent = `The Result is: ${multiplicationResult}`;
});

document.getElementById('divideButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const divisionResult = divideNumbers(num1, num2);
    document.getElementById('result').textContent = `The Result is: ${divisionResult}`;
});

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        return 'Division by zero is not allowed';
    }
    return a / b;
}
