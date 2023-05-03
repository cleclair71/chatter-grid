
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