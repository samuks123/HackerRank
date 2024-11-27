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

function caesarCipher(s, k) {
    
    let encrypted = [];
    let aux;
    let inc = k % 26; // guarantee the increment does not overflow
        
    for(let i = 0; i < s.length; i++){
        if(s[i] >= 'a' && s[i] <= 'z'){
            aux = s[i].charCodeAt(0) + inc; // getting the ascii code
            if(aux > 'z'.charCodeAt(0)) // treating overflows
                aux -= 26;
            encrypted.push(String.fromCharCode(aux));
        }
        else if(s[i] >= 'A' && s[i] <= 'Z'){
            aux = s[i].charCodeAt(0) + inc; // getting the ascii code
            if(aux > 'Z'.charCodeAt(0)) // treating overflows
                aux -= 26;
            encrypted.push(String.fromCharCode(aux));
        }
        else
            encrypted.push(s[i]);
    }
    
    return encrypted.join('');

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}