const userModel = require("../models/userModel");
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModel.find({
      userId,
      password
    });
    res.json(req.body);
    // if (user) {
    //   res.status(200).send(user);
    // } else {
    //   res.json({
    //     message: "Login Fail",
    //     user,
    //   });
    // }
  } catch (error) {
    console.log(error);
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.send({
      status: 200,
      msg: "Register Successfully",
    });
  } catch (error) {
    res.send({
      status: 400,
      msg: "Something went wrong",
    });
  }
};

module.exports = {
  loginController,
  registerController,
};
