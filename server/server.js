const express = require('express');
const path = require('path');
const cors = require('cors');
const cassandra = require('./dbFunctions/dbHelpers.js');
// const mongoDB = require('../db/db.js');
const PORT = 1458;
const app = express();

app.use(cors());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

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

app.get('/songs/:id/comment', (req, res) => {
  cassandra.getAll(req.params.id, (err, success) => {
    if (err) {
      console.log('Error at the server level with getAll!', err);
      res.status(404).send();
    } else {
      res.status(200).send(success);
    }
  });
});

app.post('/songs/:id/comment', (req, res) => {
  //comment needs to be an object with fields: song_id, comment_id, reply_id, comment_author, comment_avatar, comment_timestamp, comment_text, reply_author, reply_avatar, reply_timestamp, reply_text
  cassandra.addCommentOrReply(req.body.comment, (err, success) => {
    if (err) {
      console.log('Error at the server level with add comment!!', err);
      res.status(404).send();
    } else {
      res.status(200).send(success);
    }
  });
});

app.post('/songs/:id/reply/:comment_id/', (req, res) => {
  //reply needs to be an object with fields: song_id, comment_id, reply_id, comment_author, comment_avatar, comment_timestamp, comment_text, reply_author, reply_avatar, reply_timestamp, reply_text
  cassandra.addCommentOrReply(req.body.reply, (err, success) => {
    if (err) {
      console.log('Error at the server level with add reply!!', err);
      res.status(404).send();
    } else {
      res.status(200).send(success);
    }
  });
});


app.put('/songs/:id/comment/:comment_id/', (req, res) => {
  //commentEdit needs to be an object with fields: comment_text, song_id, comment_id
  cassandra.editComment(req.body.commentEdit, (err, success) => {
    if (err) {
      console.log('Error at the server level with edit comment!!', err);
      res.status(404).send();
    } else {
      res.status(200).send(success);
    }
  });
});

app.put('songs/:id/reply/:comment_id/:reply_id/', (req, res) => {
  //commentEdit needs to be an object with fields: reply_text, song_id, comment_id, reply_id
  cassandra.editReply(req.body.replyEdit, (err, success) => {
    if (err) {
      console.log('Error at the server level with edit reply!!', err);
      res.status(404).send();
    } else {
      res.status(200).send(success);
    }
  });
});

app.delete('.songs/:id/comment/', (req, res) => {
  cassandra.deleteSong(req.params.id, (err, success) => {
    if (err) {
      console.log('Error at the server level, failed to delete all song comments!', err);
      res.status(400).send();
    } else {
      res.status(200).send(success);
    }
  });
});

app.delete('.songs/:id/comment/:comment_id', (req, res) => {
  cassandra.deleteSong({ song_id: req.params.id, comment_id: req.params.comment_id }, (err, success) => {
    if (err) {
      console.log('Error at the server level, failed to delete a comment!', err);
      res.status(400).send();
    } else {
      res.status(200).send(success);
    }
  });
});


app.delete('songs/:id/reply/:comment_id/:reply_id', (req, res) => {
  cassandra.deleteSong({ song_id: req.params.id, comment_id: req.params.comment_id, reply_id: req.params.reply_id }, (err, success) => {
    if (err) {
      console.log('Error at the server level, failed to delete a reply!', err);
      res.status(400).send();
    } else {
      res.status(200).send(success);
    }
  });
});

// server connection
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
