const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const ItemModel = require("./models/itemModel");
const items = require("./utils/data");

// config

dotenv.config();
connectDB();

// function seeder

const importData = async () => {
  try {
    await ItemModel.deleteMany();
    const itemsData = await ItemModel.insertMany(items);
    console.log("All Done Inserted");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
