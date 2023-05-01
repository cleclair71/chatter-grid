const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chatter-grid', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
// );

// mongoose.set('debug', true);

// module.exports = mongoose.connection;

const connect = async () => {
    try {
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