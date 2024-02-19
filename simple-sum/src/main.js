const fs = require('fs');
const path = __dirname;
const srcPath = `${path}`;
var SOMA = 0;
// Read the file asynchronously
fs.readFile(`${srcPath}/data/sample.txt`, {encoding: 'utf8', flag: 'r'}, (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  //
  const numbersAsString = data.split(/\s+/);

  // Convert each string to a number
  const numbers = numbersAsString.map(num => parseFloat(num));
  numbers.every(num => SOMA += num);
  console.log(SOMA);
  // Check if there are exactly four numbers
  if (numbers.length === 2 && numbers.every(num => !isNaN(num))) {
    console.log('The numbers in the file are:', numbers);
  } else {
    console.log('Invalid file content. Please make sure there are exactly four valid numbers.');
  }
});
