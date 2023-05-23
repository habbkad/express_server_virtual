const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gen: String,
  userId: mongoose.ObjectId,
  date: { type: Date, default: Date.now() },
});

const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;
