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



/*
 * Complete the 'minTime' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY files
 *  2. INTEGER numCores
 *  3. INTEGER limit
 */
function minTime(files, numCores, limit) {
//    console.debug(`  files:    ${files}`);
//    console.debug(`  numCores: ${numCores}`);
//    console.debug(`  limit:    ${limit}`);
// INPUT: first line : number of files n
//        n lines:     list of number that are the count of lines in each file
//        before last line: number of cores, the number of line to execute in parallel have to be multiple of nro of cores
//        last line : number of limit you can apply parallel processor
    // Write your code here
    const compareNumbers = (a, b) => (b-a);
    files.sort(compareNumbers);
    const paral = files.slice(0,limit);
    const noparal = files.slice(limit);
    return paral.map( 
        (lines) => Math.floor(lines/numCores) !== lines/numCores ? lines 
        : lines/numCores 
        ).reduce( (acc, curr)=> acc+curr , 0) + 
        noparal.reduce( (acc, curr) => acc+curr , 0) ;
// 120929592 : expected
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const filesCount = parseInt(readLine().trim(), 10);

    let files = [];

    for (let i = 0; i < filesCount; i++) {
        const filesItem = parseInt(readLine().trim(), 10);
        files.push(filesItem);
    }

    const numCores = parseInt(readLine().trim(), 10);

    const limit = parseInt(readLine().trim(), 10);

    const result = minTime(files, numCores, limit);

    ws.write(result + '\n');

    ws.end();
}
