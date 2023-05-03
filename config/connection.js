const mongoose = require('mongoose');

const connect = async () => {
    try {
        // Replace 'your-mongodb-uri' with your MongoDB URI if using an external database
        // or use the provided localhost URI for local development
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chatter-grid', {
            useNewUrlParser: true,
            useUnifiedTopology: true,


          });
          console.log('Successfully connected to the database.');
        } catch (error) {
          console.error('Error connecting to the database.', error);
        }
      };
      module.exports = { connect };