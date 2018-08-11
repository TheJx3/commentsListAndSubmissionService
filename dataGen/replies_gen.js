const fs = require('fs');

const lorumA = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const lorumB = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
const lorumC = 'This song is great';

const firstName = ['Noah', 'Sophia', 'Jacob', 'Mia', 'Ethan', 'Emma', 'Daniel', 'Olivia', 'Matthew', 'Isabella', 'Alexander', 'Emily', 'Jayden', 'Sofia', 'Sebastian', 'Abigail', 'Liam', 'Victoria', 'David', 'Ava', 'Julian', 'Alexa', 'Aiden', 'Camila', 'Michael', 'Charlotte', 'Nathan', 'Samantha', 'Benjamin', 'Evelyn', 'Anthony', 'Scarlett', 'Isaac', 'Madison', 'Mason', 'Elizabeth', 'Dylan', 'Penelope', 'Andrew', 'Zoe', 'James', 'Chloe', 'Angel', 'Natalie', 'Joseph', 'Avery', 'Adrian', 'Allison', 'Aaron', 'Grace', 'Elijah', 'Aria', 'Logan', 'Amelia', 'William', 'Genesis', 'Mateo', 'Audrey', 'Lucas', 'Mila', 'Oliver', 'Ariana', 'Joshua', 'Melanie', 'Jonathan', 'Ella', 'Christopher', 'Zoey', 'Isaiah', 'Lily', 'Gabriel', 'Aubrey', 'Ryan', 'Delilah', 'Samuel', 'Leah', 'Jose', 'Maya', 'Luke', 'Ximena', 'Christian', 'Aaliyah', 'Damian', 'Layla', 'Jackson', 'Harper', 'Kevin', 'Hannah', 'Dominic', 'Violet', 'Leonardo', 'Brooklyn', 'Brandon', 'Valentina', 'Caleb', 'Bella', 'Adam', 'Natalia'];
const middleName = ['Freddie', 'Flinstone', 'Macarron', 'Harold', 'Grace', 'Yoland', 'Alfredo', 'Eggy', 'Iggy', 'Flacco', 'Flingo', 'Ringo ', 'Turringo', 'Flamingo', 'Song', 'Winston'];
const lastName = ['Smith', 'Williams', 'Lopez', 'Garcia', 'Herndandez', 'Nyguen', 'Lihn', 'Lee', 'Young', 'Brown', 'Porter', 'Jones', 'McDonald', 'Einstein', 'Jordan', 'Wang', 'Devi', 'Zhang', 'Li', 'Yang', 'Kumar', 'Singh'];
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

const getTime = () => {
  const hours = random(25);
  const minutes = random(60);
  return `${hours}:${minutes}:00`;
};

const getDate = () => {
  const day = random(27);
  const month = random(13);
  const year = random(19);
  return `${month}/${day}/20${year}`;
};

const getText = () => {
  const lorum = random(3);
  if (lorum === 2) { return lorumC; }
  if (lorum === 1) { return lorumB; }
  return lorumA;
};

const getCommentId = () => 1 + random(40000000);

async function createComments() {
  const writeStream = fs.createWriteStream('dataGen/data/replies.csv');
  writeStream.write('id, author, avatar, time, date, text, song_id \n');
  for (let i = 1; i <= 200000000; i += 1) {
    const ableToWrite = writeStream.write(`${i},${getName()},${getAvatar()},${getTime()},${getDate()},${getText()},${getCommentId()}\n`);
    if (!ableToWrite) {
      await new Promise(resolve => {
        writeStream.once('drain', resolve);
      });
    }
  }
}

createComments();
