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

function staircase(n) {
    for(let i = 0; i < n; i++){
        for(let j = 1; j < n - i; j++){ // printings the spaces
            process.stdout.write(' ');
        }
        for(let j = 0; j < i + 1; j++){ // printing the steps
            process.stdout.write('#');
        }
        console.log() // new line
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}