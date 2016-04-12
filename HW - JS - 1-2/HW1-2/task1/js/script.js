'use strict';

function powResult() {
    var number = document.getElementById('number').value;
    var exponent = document.getElementById('exponent').value;

    var numberRounded = Math.round(number);
    console.log('number = ', numberRounded);
    var exponentRounded = Math.round(exponent);
    console.log('exponent = ', exponentRounded);

    var powResult = Math.pow(numberRounded, exponentRounded);
    console.log('powResult = ', powResult);

    if (numberRounded >= 1 && powResult > 0 && powResult != NaN) {
        document.getElementById('powResult').innerHTML = 'The answer is ' + powResult;
    } else {
        alert('Enter an integer greater than 0');
        document.getElementById('powResult').innerHTML = 'Enter an integer greater than 0';
    }
}




// ********* ПЕРВЫЙ ВАРИАНТ *********

// function pow(x, n) {
//     var x = prompt('Enter a number');
//     var n = prompt('Enter exponent');
//
//     if (x <= 0 || x == NaN || n < 0 || n == NaN) {
//         alert('Refresh a page and enter a number greater than 0');
//     } else {
//         var xRounded = Math.round(x);
//         console.log('x = ', xRounded);
//         var nRounded = Math.round(n);
//         console.log('n = ', nRounded);
//
//         var powResult = Math.pow(xRounded, nRounded);
//
//         alert('The answer is ' + powResult + '!');
//     }
// }
//
// pow();
