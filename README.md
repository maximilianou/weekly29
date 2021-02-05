# weekly29
Exercise

- Start with Hackerrank, local machine. 
*( Time? a Clock? Development? well well well.. 80', unless it is not in paper :/ )*

Makefile
```
test:
	cat text.txt | node prg.js
```

prg.js ( this is not a joke, this is how hackerrank evaluate your coding style )
```js
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
```

- input.txt ( how you pass data to your program :| )

( 15 # this line will be the only one data read. there have to be a \n at the end of file
 )
```
15 
3
4
5
6
77777

```
- The Output result ok.
```
src$ make
cat text.txt | node prg.js
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

