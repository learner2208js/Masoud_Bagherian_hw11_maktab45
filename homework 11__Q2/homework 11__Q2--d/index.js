const { readFileSync, writeFileSync } = require('fs');

const fromText = readFileSync('./files/from.txt', 'utf-8');
const appendText = readFileSync('./files/append.txt', 'utf-8');
writeFileSync('./files/to.txt', `${fromText}\n${appendText}`);
