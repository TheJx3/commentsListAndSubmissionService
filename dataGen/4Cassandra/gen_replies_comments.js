const fs = require('fs');
// const uuidv4 = require('uuid/v4');

const lorumA = 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const lorumB = 'This song sounds like stinky feet!';
const lorumC = 'This song is great!';

const firstName = ['Noah', 'Sophia', 'Jacob', 'Mia', 'Ethan', 'Emma', 'Daniel', 'Olivia', 'Matthew', 'Isabella', 'Alexander', 'Emily', 'Jayden', 'Sofia', 'Sebastian', 'Abigail', 'Liam', 'Victoria', 'David', 'Ava', 'Julian', 'Alexa', 'Aiden', 'Camila', 'Michael', 'Charlotte', 'Nathan', 'Samantha', 'Benjamin', 'Evelyn', 'Anthony', 'Scarlett', 'Isaac', 'Madison', 'Mason', 'Elizabeth', 'Dylan', 'Penelope', 'Andrew', 'Zoe', 'James', 'Chloe', 'Angel', 'Natalie', 'Joseph', 'Avery', 'Adrian', 'Allison', 'Aaron', 'Grace', 'Elijah', 'Aria', 'Logan', 'Amelia', 'William', 'Genesis', 'Mateo', 'Audrey', 'Lucas', 'Mila', 'Oliver', 'Ariana', 'Joshua', 'Melanie', 'Jonathan', 'Ella', 'Christopher', 'Zoey', 'Isaiah', 'Lily', 'Gabriel', 'Aubrey', 'Ryan', 'Delilah', 'Samuel', 'Leah', 'Jose', 'Maya', 'Luke', 'Ximena', 'Christian', 'Aaliyah', 'Damian', 'Layla', 'Jackson', 'Harper', 'Kevin', 'Hannah', 'Dominic', 'Violet', 'Leonardo', 'Brooklyn', 'Brandon', 'Valentina', 'Caleb', 'Bella', 'Adam', 'Natalia'];
const middleName = ['Freddie', 'Flinstone', 'Macarron', 'Harold', 'Grace', 'Yoland', 'Alfredo', 'Eggy', 'Iggy', 'Flacco', 'Flingo', 'Ringo ', 'Turringo', 'Flamingo', 'Song', 'Winston'];
const lastName = ['Smith', 'Williams', 'Lopez', 'Garcia', 'Herndandez', 'Nyguen', 'Dang', 'Lee', 'Young', 'Brown', 'Porter', 'Jones', 'McDonald', 'Einstein', 'Jordan', 'Wang', 'Devi', 'Zhang', 'Li', 'Yang', 'Kumar', 'Singh', 'Mohammad', 'Ahmed', 'Ali'];
const sirName = ['', 'Jr.', 'Sr.', ' the 3rd', 'the 4th', 'the 5th', 'the 6th', 'the 7th'];
const names = [];

const getNameOptions = () => {
  for (let j = 0; j < firstName.length; j += 1) {
    const first = firstName[j];
    for (let m = 0; m < middleName.length; m += 1) {
      const middle = middleName[m];
      for (let z = 0; z < lastName.length; z += 1) {
        const last = lastName[z];
        for (let x = 0; x < sirName.length; x += 1) {
          const sir = sirName[x];
          names.push(`${first} ${middle} ${last} ${sir}`);
        }
      }
    }
  }
};

getNameOptions();

const random = max => Math.floor(Math.random() * Math.floor(max));

const getName = () => names[random(275969)];

const getAvatar = () => {
  const avatarNum = random(1001);
  return `${avatarNum}`;
};

const getTimeStamp = () => Math.floor(Math.random() * (1534101332 - 1000000000) + 1000000000);

const getText = () => {
  const lorum = random(10);
  if (lorum === 5) { return lorumA; }
  if (lorum % 2 !== 0) { return lorumB; }
  return lorumA;
};

const moduleSetter = 7;

const commentFuncs = (fn, i) => {
  if (i % moduleSetter === 0 || i % moduleSetter === 3 || i % moduleSetter === 5 || i % moduleSetter === 6) {
    return fn();
  }
  return '';
};

const replyFuncs = (fn, i) => {
  if (i % moduleSetter === 1 || i % moduleSetter === 2 || i % moduleSetter === 4) {
    return fn();
  }
  return '';
};

const incrementSong = () => {
  let i = 0;
  return (index) => {
    if (index % moduleSetter === 0) {
      i += 1;
    }
    return i;
  };
};

const incrementComment = () => {
  let i = 0;
  return (index) => {
    if (index % moduleSetter === 0 || index % moduleSetter === 3 || index % moduleSetter === 5 || index % moduleSetter === 6) {
      i += 1;
    }
    return i;
  };
};

const incrementReply = () => {
  let i = 0;
  return (index) => {
    if (index % moduleSetter === 1 || index % moduleSetter === 2 || index % moduleSetter === 4) {
      i += 1;
      return i;
    }
    return 0;
  };
};

const songIdIncrementBy = incrementSong();
const commentIncrementBy = incrementComment();
const replyIncrementBy = incrementReply();

async function create_comments_and_replies_by_id() {
  const writeStream = fs.createWriteStream('dataGen/data/cassandra.csv');
  writeStream.write('song_id, comment_id, reply_id, comment_author, comment_avatar, comment_timestamp, comment_text, reply_author, reply_avatar, reply_timestamp, reply_text\n');
  for (let i = 0; i <= 1; i += 1) {
    const ableToWrite = writeStream.write(`${songIdIncrementBy(i)}, ${commentIncrementBy(i)}, ${replyIncrementBy(i)}, ${commentFuncs(getName, i)}, ${commentFuncs(getAvatar, i)}, ${commentFuncs(getTimeStamp, i)}, ${commentFuncs(getText, i)}, ${replyFuncs(getName, i)}, ${replyFuncs(getAvatar, i)}, ${replyFuncs(getTimeStamp, i)}, ${replyFuncs(getText, i)} \n`);
    if (!ableToWrite) {
      await new Promise(resolve => {
        writeStream.once('drain', resolve);
      });
    }
  }
}

create_comments_and_replies_by_id();
