const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      userNewUrlParser: true,
      userUnifiedTopology: true,
      useFindAndModify: true,
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
