const fs = require('fs');

async function generateIds() {
  const writeStream = fs.createWriteStream('ids.csv');
  writeStream.write('song_id, comment_id, reply_id\n');
  for (let i = 7000000; i <= 7050000; i += 1) {
    const ableToWrite = writeStream.write(`${i},${i * 4},${i * 3}\n`);
    if (!ableToWrite) {
      await new Promise(resolve => {
        writeStream.once('drain', resolve);
      });
    }
  }
}

generateIds();
