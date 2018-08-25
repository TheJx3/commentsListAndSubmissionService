const redis = require('redis');

const client = redis.createClient({host: 'redis'});

client.on('error', (err) => {
  console.log(`Bad Cake: ${err}`);
});

client.on('connect', () => {
  console.log('Good Cake: Connection to Reddis client successful');
});

const checkRedis = (songId, cb) => {
  client.hgetall(songId, (err, reply) => {
    if (err || reply === null) {
      const message = `Value not found on Redis: ${err}`;
      cb(message);
    } else {
      cb(null, JSON.parse(reply['V:']));
    }
  });
};

const saveToRedis = (data, cb) => {
  client.hmset(data[0].song_id, ['V:', JSON.stringify(data)], (err) => {
    if (err) {
      cb(err);
    }
  });
};


// const checkRedis = (songId, cb) => {
//   client.smembers(songId, (err, response) => {
//     if (err) {
//       cb(err);
//     } else {
//       const pipe = client.pipeline();
//       const hashKeys = response.split('\r\n');
//       hashKeys.forEach((e) => {
//         pipe.hgetAll(e);
//       });
//       pipe.execute((error, success) => {
//         if (error) {
//           console.log('Error with pipe execute');
//           cb(err);
//         } else {
//           cb(null, success);
//         }
//       });
//     }
//   });
// };
//
// const saveToRedis = (data, cb) => {
//   const id = data[0].song_id;
//   const pipe = client.pipeline();
//   data.forEach((e) => {
//     pipe.sadd(id, `${e.song_id}, ${e.comment_id}, ${e.reply_id}`);
//   });
//   pipe.execute((error) => {
//     if (error) {
//       cb(error);
//     } else {
//       const pipe2 = client.pipeline();
//       data.forEach((e) => {
//         pipe2.hmset(`${e.song_id}, ${e.comment_id}, ${e.reply_id}`, [
//           e.song_id,
//           e.comment_id,
//           e.reply_id,
//           e.comment_author,
//           e.comment_avatar,
//           e.comment_timestamp,
//           e.comment_text,
//           e.reply_author,
//           e.reply_avatar,
//           e.reply_timestamp,
//           e.reply_text,
//         ]);
//       });
//       pipe2.exectue((err) => {
//         if (err) {
//           cb(err);
//         } else {
//           console.log('Added song data to redis');
//         }
//       });
//     }
//   });
// };

module.exports = {
  checkRedis,
  saveToRedis,
  // checkRedis2,
  // saveToRedis2,
};
