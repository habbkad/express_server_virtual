const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gen: String,
  date: { type: Date },
});

const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;
