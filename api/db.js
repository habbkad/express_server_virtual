const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://codetrainfellows:zLtLRrPyL5legrmG@cluster0.i8aqjro.mongodb.net/test"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
