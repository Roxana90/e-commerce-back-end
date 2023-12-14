const express = require('express');
const app = express();
require('dotenv').config();

const loaders = require('./loaders');

const { PORT } = require('./config');

//const port = process.env.PORT || 3000;

async function startServer() {

  // Init application loaders
  loaders(app);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
}

startServer();