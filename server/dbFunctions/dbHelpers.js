const db = require('./index.js');

const getAll = (data, callback) => {
  const query = 'SELECT * FROM soundofcloud.comments_replies_bySong WHERE song_id = ?';
  db.execute(query, [data], (err, result) => {
    if (err) {
      console.log('Error with the getAll function at the db Helper level!');
      callback(err);
    } else {
      callback(null, result);
      console.log('Succees executing the getAll fucntion!');
    }
  });
};

const addCommentOrReply = (data, callback) => {
  const query = 'INSERT INTO soundofcloud.comments_replies_bySong (song_id, comment_id, reply_id, comment_author, comment_avatar, comment_timestamp, comment_text, reply_author, reply_avatar, reply_timestamp, reply_text) VALUES(?,?,?,?,?,?,?,?,?,?,?)';
  db.execute(query, [data.song_id, data.comment_id, data.reply_id, data.comment_author, data.comment_avatar, data.comment_timestamp, data.comment_text, data.reply_author, data.reply_avatar, data.reply_timestamp, data.reply_text], (err, result) => {
    if (err) {
      console.log('Error with the getAll function at the db Helper level!');
      callback(err);
    } else {
      callback(null, result);
      console.log('Succees executing the getAll fucntion!');
    }
  });
};

const editComment = (data, callback) => {
  const query = 'UPDATE soundofcloud.comments_replies_bySong SET comment_text = ? WHERE song_id = ? AND comment_id = ? AND reply_id = ?';
  db.execute(query, [data.comment_text, data.song_id, data.comment_id, 0], (err, result) => {
    if (err) {
      console.log('Error with the getAll function at the db Helper level!');
      callback(err);
    } else {
      callback(null, result);
      console.log('Succees executing the getAll fucntion!');
    }
  });
};

const editReply = (data, callback) => {
  const query = 'UPDATE soundofcloud.comments_replies_bySong SET comment_text = ? WHERE song_id = ? AND comment_id = ? AND reply_id = ?';
  db.execute(query, [data.reply_text, data.song_id, data.comment_id, data.reply_id], (err, result) => {
    if (err) {
      console.log('Error with the getAll function at the db Helper level!');
      callback(err);
    } else {
      callback(null, result);
      console.log('Succees executing the getAll fucntion!');
    }
  });
};

const deleteSong = (data, callback) => {
  const query = 'DELETE FROM soundofcloud.comments_replies_bySong where song_id = ?';
  db.execute(query, [data], (err, result) => {
    if (err) {
      console.log('Error with the getAll function at the db Helper level!');
      callback(err);
    } else {
      callback(null, result);
      console.log('Succees executing the getAll fucntion!');
    }
  });
};

const deleteComment = (data, callback) => {
  const query = 'DELETE FROM soundofcloud.comments_replies_bySong where song_id = ? AND comment_id = ?';
  db.execute(query, [data.song_id, data.comment_id], (err, result) => {
    if (err) {
      console.log('Error with the getAll function at the db Helper level!');
      callback(err);
    } else {
      callback(null, result);
      console.log('Succees executing the getAll fucntion!');
    }
  });
};

const deleteReply = (data, callback) => {
  const query = 'DELETE FROM soundofcloud.comments_replies_bySong where song_id = ? AND comment_id = ? AND reply_id = ?';
  db.execute(query, [data.song_id, data.comment_id, data.reply_id], (err, result) => {
    if (err) {
      console.log('Error with the getAll function at the db Helper level!');
      callback(err);
    } else {
      callback(null, result);
      console.log('Succees executing the getAll fucntion!');
    }
  });
};

module.exports = {
  getAll,
  addCommentOrReply,
  editComment,
  editReply,
  deleteSong,
  deleteComment,
  deleteReply,
};
