const fs = require('fs');
const request = require('request');

const download = function(uri, filename, callback) {
  request.head(uri, (err, res, body) => {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const downloadImages = (outOf) => {
  const totalNumber = 100;
  for (let j = 0; j < totalNumber; j += 1) {
    const imageUrl = 'https://loremflickr.com/100/100';
    const name = `dataGen/data/images/${j + outOf - 99}.png`;
    download(imageUrl, name, () => {
      console.log('still working...');
    });
  }
};

downloadImages(100);
