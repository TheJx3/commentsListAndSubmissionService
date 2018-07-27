const mongoose = require('mongoose');
const sampleData = require('./sampleCommentData');

mongoose.connect('mongodb://localhost/commentsList');

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const repliesSchema = new mongoose.Schema({
  id: Number,
  username: String,
  userId: Number,
  text: String,
});

const commentsSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  username: String,
  userId: Number,
  text: String,
  replies: [repliesSchema],
  songtime: Number,
  timestamp: Date,
});

const Comment = mongoose.model('comment', commentsSchema);

// For populating database
for (let i = 0; i < sampleData.length; i += 1) {
  const saveComment = new Comment(sampleData[i]);
  saveComment.save((error, sampleData) => {
    if (error) {
      return console.log('error saving');
    }
    return console.log('saved', sampleData);
  });
}

// Gets all comments for a song on song page
const getComments = (err, retrievedComments) => {
  if (err) {
    console.log('error occured: ', err);
  } else {
    Comment.find({}).exec((error, comments) => {
      if (error) {
        console.log('error: ', err);
      } else {
        // sort data to display newest comments
        comments.sort((a, b) => b.id - a.id);

        // log test
        console.log('returned from database: ', comments);

        retrievedComments(null, comments);
      }
    });
  }
};

module.exports.getComments = getComments;
