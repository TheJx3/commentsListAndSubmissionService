const fs = require('fs');
const readline = require('linebyline');


const generateListings = () => {
  console.log('beginning concatenation of csv file...');
  let lineCount = 0;
  const rl = readline('./dataGen/testData/test.csv', {
    retainBuffer: true,
  });
  const out = fs.createWriteStream('./dataGen/testData/concated_test.csv', { flag: 'a' });
  rl.on('line', (line) => {
    const lineStr = line.toString();
    const lineSplit = lineStr.split(',');
    if (lineCount === 0) {
      out.write(`${lineSplit[0]},${lineSplit[1]},${lineSplit[2]}, another field \n`);
    } else {
      out.write(`${lineSplit[0]},${lineSplit[1]},${lineSplit[2]},'hEEEEEY! friend' \n`);
    }
    lineCount += 1;
  });
  console.log('finished!');
};

generateListings();
