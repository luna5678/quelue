const mongoose = require('mongoose');

require('dotenv').config();
const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/quelue';

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionStr} 🙌 `);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connected error 😥 `, err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected 🔌 ');
});