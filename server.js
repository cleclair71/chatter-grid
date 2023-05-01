// const express = require('express');
// const db = require('./config/connection');
// const routes = require('./routes');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(routes);

// db.once('open', () => {
//     app.listen(PORT, () => {
//         console.log(`API server running on port ${PORT}!`);
//     });
//     });

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the MongoDB database
const { connect } = require('./config/connection');
connect();

// Import routes
const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });