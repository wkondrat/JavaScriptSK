/*
 * Unit tests for js/calculator.js
 */

describe('Calculator', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<div id="fixture"><input id="first_number" type="number">' +
            '<input id="second_number" type="number">' +
            '<input id="result" type="number"></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('should return 3 for 1 + 2', function() {
        //given
        document.getElementById('first_number').value = 1;
        document.getElementById('second_number').value = 2;
        //when
        calculator.add();
        //then
        var results = parseInt(document.getElementById('result').value);
        expect(results).toBe(3);
    });

    it('should throw exception for add when variable is not a number', function() {
        //given
        document.getElementById('first_number').value = '2e-1e';
        document.getElementById('second_number').value = 4;
        //when
        expect(function() {
            calculator.add();
        }).toThrow(new Error('incorrect number'));
    });

    it('should return 6 for 9 - 3', function() {
        //given
        document.getElementById('first_number').value = 9;
        document.getElementById('second_number').value = 3;
        //when
        calculator.subtract();
        //then
        var results = parseInt(document.getElementById('result').value);
        expect(results).toBe(6);
    });

    it('should throw exception for subtract when variable is not a number', function() {
        //given
        document.getElementById('first_number').value = '2e-1e';
        document.getElementById('second_number').value = 4;
        //when
        expect(function() {
            calculator.subtract();
        }).toThrow(new Error('incorrect number'));
    });


    it('should return 12 for 3 * 4', function() {
        //given
        document.getElementById('first_number').value = 3;
        document.getElementById('second_number').value = 4;
        //when
        calculator.multiply();
        //then
        var results = parseInt(document.getElementById('result').value);
        expect(results).toBe(12);
    });

    it('should throw exception for multiply when variable is not a number', function() {
        //given
        document.getElementById('first_number').value = '2e-1e';
        document.getElementById('second_number').value = 4;
        //when
        expect(function() {
            calculator.multiply();
        }).toThrow(new Error('incorrect number'));
    });

    it('should return 0.5 for 4 / 8', function() {
        //given
        document.getElementById('first_number').value = 4;
        document.getElementById('second_number').value = 8;
        //when
        calculator.divide();
        //then
        var results = parseFloat(document.getElementById('result').value);
        expect(results).toBe(0.5);
    });

    it('should throw exception for divide when variable is not a number', function() {
        //given
        document.getElementById('first_number').value = '2e-1e';
        document.getElementById('second_number').value = 4;
        //when
        expect(function() {
            calculator.divide();
        }).toThrow(new Error('incorrect number'));
    });

    it('should throw exception when second_number equals 0', function() {
        //given
        document.getElementById('first_number').value = 4;
        document.getElementById('second_number').value = 0;
        //when
        expect(function() {
            calculator.divide();
        }).toThrow(new Error('incorrect number'));
    });

    it('should return 24 for 4!', function() {
        //given
        document.getElementById('first_number').value = 4;
        //when
        calculator.factorial();
        //then
        var results = parseFloat(document.getElementById('result').value);
        expect(results).toBe(24);
    });

    it('should throw exception when first_number equals 0', function() {
        //given
        document.getElementById('first_number').value = 0;
        //when
        expect(function() {
            calculator.factorial();
        }).toThrow(new Error('incorrect number'));
    });

    it('should throw exception when first_number is not Integer', function() {
        //given
        document.getElementById('first_number').value = 2.4;
        //when
        expect(function() {
            calculator.factorial();
        }).toThrow(new Error('incorrect number'));
    });

});
