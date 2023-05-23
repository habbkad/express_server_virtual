const userModel = require("../models/users_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signUpuser = async (req, res, next) => {
  const { name, email, password } = req.body;

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);

  const user = new userModel({ name, email, password: hash });
  user.save();

  if (!user) {
    return res.send({ message: "unsuccessful", data: null });
    next();
  }

  //setting jwt with user Id
  const token = jwt.sign({ id: user._id }, "I miss u");

  res
    .cookie("token", token, {
      expire: 360000 + Date.now(),
    })
    .send({ message: "successful", data: user });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  //confirming user email is present in the db
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.send({
      message: "unsuccessful",
      response: "input valid credentials",
    });
    next();
  }

  //verifying password from user to hased password in db
  const isPassword = bcrypt.compareSync(password, user.password);

  if (!isPassword) {
    return res.send({
      message: "unsuccessful",
      response: "input valid credentials",
    });
    next();
  }
  //if verified, setting jwt with user Id and passing to cookies in frontend
  const token = jwt.sign({ id: user._id }, "I miss u");

  res
    .cookie("token", token, {
      expire: 360000 + Date.now(),
    })
    .send({ message: "successful", data: user });
};
