const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // This function uses the connection string from your .env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    // If the connection fails, it will log the error and exit the app
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;