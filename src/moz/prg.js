'use strict';

const fs = require('fs');

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


const https = require('https');

/*
 * Complete the 'getUsernames' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER threshold as parameter.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/article_users?page=<pageNumber>
 */


const getPage = async (page_number) => {
    return new Promise( (resolve, reject) => {
      if(isNaN(page_number) || page_number < 1) return reject(`Error Page ${page_number}.`);
      https.get(`https://jsonmock.hackerrank.com/api/article_users?page=${page_number}`, 
      (resp) => {           
         let data = '';
         resp.on('data', (chunk) => {
          data += chunk;
         });
         resp.on('end', () => {
          return resolve(JSON.parse(data));
         });
       }).on("error", (err) => {
        return reject("Error: " + err.message);
       });        
});
}

async function getUsernames(threshold) {
  try{
    const res = await getPage(1);   
    const total_pages = res.total_pages;
    const arr = Array.from({length: total_pages}, (_, index) => index +1);
    const resultPages = arr.map( i =>  getPage(i)
    .then( 
      res => res
    ).catch(e => e ) );
    const allData = resultPages.filter( ( d ) => d.data.submitted > threshold )
    const names = allData.map( d => d.data.map( usr => usr.username ) )
    return [ ...names];
  }catch(e){
      console.log(e.message)
      throw e;
  }
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const threshold = parseInt(readLine().trim(), 10);

    const result = await getUsernames(threshold);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
