const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Is Connected");
  } catch (error) {
    console.log("DB Not Connected");
    process.exit(1);
  }
};

module.exports = connectDB;
