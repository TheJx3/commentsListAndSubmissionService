const express = require('express');
const path = require('path');
const cors = require('cors');
// const mongoDB = require('../db/db.js');
const db = require('./dbFunctions/index.js')

const app = express();
app.use(cors());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// serve static assets
app.use(express.static(path.join(__dirname, '../client/dist')));

// outputs all comments for a song
// app.get('/api/songs/songId/comments', (req, res) => {
//   mongoDB.getComments(null, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(data);
//     }
//   });
// });

const query = 'SELECT name, email FROM users WHERE key = ?';

client.execute(query, [ 'someone' ], function(err, result) {
  assert.ifError(err);
  console.log('User with email %s', result.rows[0].email);
});


// server connection
const PORT = 1458;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
