const mongoose = require('mongoose');

const sampleData = require('./sampleCommentData');

const Schema = mongoose.Schema; 

mongoose.connect('mongodb://localhost/commentsListViewAndSubmission');

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const repliesSchema = new Schema({
  id: Number,
  username: String,
  userId: Number,
  text: String,
});

const commentsSchema = new Schema({
  id: { type: Number, unique: true },
  username: String,
  userId: Number,
  text: String,
  replies: [repliesSchema],
  songtime: Number,
  timestamp: Date,
});

const Comment = mongoose.model('comment', commentsSchema);

for (let i = 0; i < sampleData.length; i += 1) {
  const saveComment = new Comment(sampleData[i]);
  saveComment.save((error, sampleData) => {
    if (error) {
      return console.log('error saving');
    }
    return console.log('saved', sampleData);
  });
}

// console.log(sampleData); 

Comment.find((error, comments) => {
  if (error) {
    console.log('could not find comments');
  } else {
    console.log('here are the comments: ', comments);
  }
});
