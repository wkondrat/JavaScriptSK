console.log('hello from main js');
var x,
    calculate = function(number1, number2) {
        return {
            add: function() {
                return number1 + number2;
            },
            subtract: function() {
                return number1 - number2;
            },
            multiply: function() {
                return number1 * number2;
            },
            divide: function() {
                return number1 / number2;
            },
            factorial: function() {
                var result = 1;
                for (var i = 2; i <= number1; i++)
                    result = result * i;
                return result;
            }
        }
    };

// x = calculate(3, 4);
// console.log(x.add());
// console.log(x.subtract());
// console.log(x.multiply());
// console.log(x.divide());
// console.log(x.factorial());
