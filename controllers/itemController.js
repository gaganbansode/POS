const itemModel = require("../models/itemModel");
const getItemController = async (req, res) => {
  try {
    const item = await itemModel.find();
    res.status(200).send(item);
  } catch (error) {
    console.log(error);
  }
};

const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.send({
      status: 200,
      msg: "Item Created Successfully",
    });
  } catch (error) {
    res.send({
      status: 400,
      msg: "Something went wrong",
    });
  }
};

const editItemController = async (req, res) => {
  try {
    await itemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body);
    res.send({
      status: 201,
      msg: "Item Updated Successfully",
    });
  } catch (error) {
    res.send({
      status: 400,
      msg: "Something went wrong",
    });
  }
};

const deleteItemController = async (req, res) => {
  try {
    await itemModel.findOneAndDelete({ _id: req.body.itemId });
    res.send({
      status: 200,
      msg: "Item Deleted Successfully",
    });
  } catch (error) {
    res.send({
      status: 400,
      msg: "Something went wrong",
    });
  }
};

module.exports = {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
};
