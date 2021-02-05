'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    const mod = a => b => b % a === 0;
    const mod3 = mod(3);
    const mod5 = mod(5);
    const textOrUndefined = (txt, m, n) => m(n)?txt:undefined;
    if( isNaN(n) || n<0 ) return;
    const arr = Array.from({length: n}, (_, index) => index +1);
    arr.map( i => 
      console.log(`${textOrUndefined('Fizz',mod3,i) || ''}${textOrUndefined('Buzz',mod5,i) || ''}${(!mod3(i)&&!mod5(i)? i:'')}`)
    )
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}

