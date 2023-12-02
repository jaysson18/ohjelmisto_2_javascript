'use strict';
document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById('calculation');
    const calculateButton = document.getElementById('start');
    const resultParagraph = document.getElementById('result');

    calculateButton.addEventListener("click", function() {
        const input = userInput.value.trim();

        if (!input) {
            alert("Please enter a valid calculation.");
            return;
        }

        let num1, num2, operation;

        if (input.includes('+')) {
            [num1, num2] = input.split('+').map(num => parseInt(num));
            operation = 'add';
        } else if (input.includes('-')) {
            [num1, num2] = input.split('-').map(num => parseInt(num));
            operation = 'sub';
        } else if (input.includes('*')) {
            [num1, num2] = input.split('*').map(num => parseInt(num));
            operation = 'multi';
        } else if (input.includes('/')) {
            [num1, num2] = input.split('/').map(num => parseInt(num));
            operation = 'div';
        } else {
            alert("Invalid calculation. Please use +, -, *, or / operators.");
            return;
        }

        let result;

        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'multi':
                result = num1 * num2;
                break;
            case 'div':
                if (num2 !== 0) {
                    result = Math.floor(num1 / num2);
                } else {
                    alert("Cannot divide by zero!");
                    return;
                }
                break;
            default:
                alert("Invalid operation");
                return;
        }

        resultParagraph.textContent = `Result: ${result}`;
    });
});
