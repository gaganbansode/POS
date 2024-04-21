const billModel = require("../models/billsModel");

const addBillsController = async (req, res) => {
  try {
    const newBill = new billModel(req.body);
    await newBill.save();
    res.send({
      status: 200,
      msg: "Bill Created Successfully",
    });
  } catch (error) {
    res.send({
      status: 400,
      msg: "Something went wrong",
    });
  }
};

//get blls data
const getBillsController = async (req, res) => {
  try {
    const bills = await billModel.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBillsController,
  getBillsController,
};
