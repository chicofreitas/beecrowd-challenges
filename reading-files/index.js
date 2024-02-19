const path = __dirname;
const input = require('fs').readFileSync(`${path}/sample.txt`, 'utf8');
var lines = input.split('\n');

console.log(lines);
