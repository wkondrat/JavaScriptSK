'use strict';
var calculator = (function() {
    return {
        add: function() {
            var firstNumber = parseFloat(document.getElementById('first_number').value),
                secondNumber = parseFloat(document.getElementById('second_number').value);
            // if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
            if (isNaN(firstNumber) || isNaN(secondNumber)) {
                throw new Error('incorrect number');
            };
            document.getElementById('result').value = firstNumber + secondNumber;
        },
        subtract: function() {
            var firstNumber = parseFloat(document.getElementById('first_number').value),
                secondNumber = parseFloat(document.getElementById('second_number').value);
            if (isNaN(firstNumber) || isNaN(secondNumber)) {
                throw new Error('incorrect number');
            };
            document.getElementById('result').value = firstNumber - secondNumber;
        },
        multiply: function() {
            var firstNumber = parseFloat(document.getElementById('first_number').value),
                secondNumber = parseFloat(document.getElementById('second_number').value);
            if (isNaN(firstNumber) || isNaN(secondNumber)) {
                throw new Error('incorrect number');
            };
            document.getElementById('result').value = firstNumber * secondNumber;
        },
        divide: function() {
            var firstNumber = parseFloat(document.getElementById('first_number').value),
                secondNumber = parseFloat(document.getElementById('second_number').value);
            if (isNaN(firstNumber) || isNaN(secondNumber) || secondNumber === 0) {
                throw new Error('incorrect number');
            };
            document.getElementById('result').value = firstNumber / secondNumber;
        },
        factorial: function() {
            var firstNumber = parseFloat(document.getElementById('first_number').value),
                result = 1;
            if (isNaN(firstNumber) || firstNumber < 1 || (firstNumber % 1 !== 0)) {
                throw new Error('incorrect number');
            };
            for (var i = 2; i <= firstNumber; i++){
                result = result * i;
            };
            document.getElementById('result').value = result;
        }
    }
})();
