const fs = require('fs');
const readline = require('linebyline');

const generateListings = () => {
  const rl = readline('./dataGen/data/test.csv', {
    retainBuffer: true
  });
  console.log('generateListings');
  let out = fs.createWriteStream('./dataGen/data/concated_song_titles_test.csv', {flag: 'a'});
  rl.on('line', (line) => {
    const lineStr = line.toString();
    const lineSplit = lineStr.split(',');
    out.write(`${lineSplit[0]},${lineSplit[1]},${lineSplit[2]},'hEEEEEY! friend'\n`)
  });
};

generateListings();
