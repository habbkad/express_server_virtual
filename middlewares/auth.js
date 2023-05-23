const jwt = require("jsonwebtoken");
const userModel = require("../models/users_model");

exports.protect = async (req, res, next) => {
  const { token } = req.cookies;
  //checking if token is present in cookie
  if (!token) {
    return res.send({
      message: "unsuccessful",
      error: "Please sign up to access route ",
    });
  }

  try {
    //verifying token
    const decoded = jwt.verify(token, "I miss u");
    //verifying user
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.send({
        message: "unsuccessful",
        error: "Please sign up to access route ",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    //error sent if token is wrong
    return res.send({
      message: "unsuccessful",
      error: "Please sign up to access route",
    });
  }
};
