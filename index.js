'use strict';

require('dotenv').config();
let { startup } = require('./src/server');

// Start up DB Server
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => startup(process.env.PORT))
  .catch((e) => console.error('Wasn\'t able to start server: ' + e.message || e));