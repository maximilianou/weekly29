# weekly29
Exercise

---
### Step

- From interview, you have 20' sharescreen, in realtime, you can talk with interviewers, and explain what are you thinking.

* *Sorry, but, in 20' a couldn't solve it, so, I feel terrible bad programmer, and I need to solve it without a clock, later*
* *I use Functional Programming, the kind of old style Haskell like pattern matching.*

> Create a function that accepts a string as input, 
> removes all content between parentheses, 
> and returns the modified string. 
> If the amount of left and right parentheses doesn't match, 
> return empty string 
> Example input: 12(3(45))67(8)9 output:12679 
> Example: input: 123(4(5)))6 output: ""

- $ cat exercise.js 
```javascript
/*
Create a function that accepts a string as input, 
removes all content between parentheses, 
and returns the modified string. 
If the amount of left and right parentheses doesn't match, 
return empty string 
Example input: 12(3(45))67(8)9 output:12679 
Example: input: 123(4(5)))6 output: "" 
*/

const { assert } = require("console");

const takeOne = ({ text=[], tokenInit='(',tokenFinish=')', tokenLevel=0, result='' }) => {
    console.debug(`takeOne:: ${text} :: tokL=${tokenLevel}  text.length=${text.length}  result=${result}`); 
    if(text.length === 0  ){
      return result;
   }else{
      const [x, ...xs] = text;
      if( x === tokenInit ){
        return takeOne({ text: xs, tokenLevel: ++tokenLevel, result: result });
      } else if( x === tokenFinish ){
        return takeOne({ text: xs, tokenLevel: --tokenLevel, result: result } );
      } else if( tokenLevel > 0 ){
        return takeOne({ text: xs, tokenLevel: tokenLevel,   result: result });
      } else {
        return takeOne({ text: xs, tokenLevel: tokenLevel,   result: result + x });
      }
    }
}
const checkPairs = ({text='',tokenInit='(', tokenFinish=')'}) => {
  return text.split(tokenInit).length === text.split(tokenFinish).length;
}
const cleanParentheses = ({text}) => {
  const textArray = text.split('');
  if( !checkPairs({ text: text, tokenInit: '(', tokenFinish: ')'  }) ){
   return '';
  } else {
   return takeOne({ text: textArray, tokenInit: '(', tokenFinish: ')', tokenLevel: 0, result: '' });
  }
}

const main = () => {
  console.debug('Check[..]');
  console.debug('-----------------------------------------------');
  assert( '' ===      cleanParentheses({text: '(12(3(45))67(8)9)' }), 'Empty:: (..)' );
  console.debug('-----------------------------------------------');
  assert( '' ===      cleanParentheses({text: '123(4(5)))6'       }), 'Empty ()))' );
  console.debug('-----------------------------------------------');
  assert( '12679' === cleanParentheses({text: '12(3(45))67(8)9'   }), 'Not Empty!' );
  console.debug('-----------------------------------------------');
  console.debug('Check[OK]');
};
main();
```

- Debug Log execution
```
$ node exercise.js 
Check[..]
-----------------------------------------------
takeOne:: (,1,2,(,3,(,4,5,),),6,7,(,8,),9,) :: tokL=0  text.length=17  result=
takeOne:: 1,2,(,3,(,4,5,),),6,7,(,8,),9,) :: tokL=1  text.length=16  result=
takeOne:: 2,(,3,(,4,5,),),6,7,(,8,),9,) :: tokL=1  text.length=15  result=
takeOne:: (,3,(,4,5,),),6,7,(,8,),9,) :: tokL=1  text.length=14  result=
takeOne:: 3,(,4,5,),),6,7,(,8,),9,) :: tokL=2  text.length=13  result=
takeOne:: (,4,5,),),6,7,(,8,),9,) :: tokL=2  text.length=12  result=
takeOne:: 4,5,),),6,7,(,8,),9,) :: tokL=3  text.length=11  result=
takeOne:: 5,),),6,7,(,8,),9,) :: tokL=3  text.length=10  result=
takeOne:: ),),6,7,(,8,),9,) :: tokL=3  text.length=9  result=
takeOne:: ),6,7,(,8,),9,) :: tokL=2  text.length=8  result=
takeOne:: 6,7,(,8,),9,) :: tokL=1  text.length=7  result=
takeOne:: 7,(,8,),9,) :: tokL=1  text.length=6  result=
takeOne:: (,8,),9,) :: tokL=1  text.length=5  result=
takeOne:: 8,),9,) :: tokL=2  text.length=4  result=
takeOne:: ),9,) :: tokL=2  text.length=3  result=
takeOne:: 9,) :: tokL=1  text.length=2  result=
takeOne:: ) :: tokL=1  text.length=1  result=
takeOne::  :: tokL=0  text.length=0  result=
-----------------------------------------------
-----------------------------------------------
takeOne:: 1,2,(,3,(,4,5,),),6,7,(,8,),9 :: tokL=0  text.length=15  result=
takeOne:: 2,(,3,(,4,5,),),6,7,(,8,),9 :: tokL=0  text.length=14  result=1
takeOne:: (,3,(,4,5,),),6,7,(,8,),9 :: tokL=0  text.length=13  result=12
takeOne:: 3,(,4,5,),),6,7,(,8,),9 :: tokL=1  text.length=12  result=12
takeOne:: (,4,5,),),6,7,(,8,),9 :: tokL=1  text.length=11  result=12
takeOne:: 4,5,),),6,7,(,8,),9 :: tokL=2  text.length=10  result=12
takeOne:: 5,),),6,7,(,8,),9 :: tokL=2  text.length=9  result=12
takeOne:: ),),6,7,(,8,),9 :: tokL=2  text.length=8  result=12
takeOne:: ),6,7,(,8,),9 :: tokL=1  text.length=7  result=12
takeOne:: 6,7,(,8,),9 :: tokL=0  text.length=6  result=12
takeOne:: 7,(,8,),9 :: tokL=0  text.length=5  result=126
takeOne:: (,8,),9 :: tokL=0  text.length=4  result=1267
takeOne:: 8,),9 :: tokL=1  text.length=3  result=1267
takeOne:: ),9 :: tokL=1  text.length=2  result=1267
takeOne:: 9 :: tokL=0  text.length=1  result=1267
takeOne::  :: tokL=0  text.length=0  result=12679
-----------------------------------------------
Check[OK]
```

---
### Step
- Start local machine. 

Makefile
```
test:
	cat text.txt | node prg.js
```

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

( 15 # this line will be the only one data read. the \n will finish the input )
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

