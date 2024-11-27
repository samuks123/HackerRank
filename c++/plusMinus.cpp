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


function plusMinus(arr) {
    const length = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    const positiveRatio = (positiveCount / length).toFixed(6);
    const negativeRatio = (negativeCount / length).toFixed(6);
    const zeroRatio = (zeroCount / length).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}