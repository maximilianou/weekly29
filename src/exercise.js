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
