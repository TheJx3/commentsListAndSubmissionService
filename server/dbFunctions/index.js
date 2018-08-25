const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['54.183.65.53'],
  keyspace: 'soundofcloud',
});

module.exports = client;
