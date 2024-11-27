'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getMoneySpent(keyboards, drives, b) {
    
    let temp = 0;
    let max = -1;
        
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            temp = keyboards[i] + drives[j]
            if(temp <= b && temp > max)
                max = temp;
        }
    }
    
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const bnm = readLine().split(' ');

    const b = parseInt(bnm[0], 10);

    const n = parseInt(bnm[1], 10);

    const m = parseInt(bnm[2], 10);

    const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));

    const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

    let moneySpent = getMoneySpent(keyboards, drives, b);

    ws.write(moneySpent + "\n");

    ws.end();
}