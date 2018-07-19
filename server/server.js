const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// serve static assets
app.use(express.static(path.join(__dirname, '../client/dist')));

// server connection
const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));