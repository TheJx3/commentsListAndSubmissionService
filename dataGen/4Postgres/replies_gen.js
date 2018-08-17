const fs = require('fs');

const lorumA = 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
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

const getCommentId = () => 1 + random(40000000);

async function createReplies() {
  const writeStream = fs.createWriteStream('dataGen/data/postgres_replies.csv');
  writeStream.write('id, author, avatar, timestamp, text, song_id \n');
  for (let i = 1; i <= 20000000; i += 1) {
    const ableToWrite = writeStream.write(`${i},${getName()},${getAvatar()},${getTimeStamp()},${getText()},${getCommentId()}\n`);
    if (!ableToWrite) {
      await new Promise(resolve => {
        writeStream.once('drain', resolve);
      });
    }
  }
}

createReplies();
