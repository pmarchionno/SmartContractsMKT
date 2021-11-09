// require('dotenv').config();
// const express = require('express')

// const app = express();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on ${PORT}`));

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});