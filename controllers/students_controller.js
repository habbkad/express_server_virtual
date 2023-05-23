const studentModel = require("../models/student_model");
const { findOne } = require("../models/users_model");

//desc     create new student
//route    POST /student/
//access   private
exports.createStudent = async (req, res, next) => {
  const { name, age, gen } = req.body;

  const userId = req.user._id;

  try {
    const student = new studentModel({ name, age, gen, userId });
    await student.save();
    res.send({ success: true, data: student });
  } catch (error) {
    res.send({ success: false, data: null });
  }
};

//desc     get student
//route    GET /student/
//access   public
exports.getStudents = async (req, res, next) => {
  //get from frontend req body
  const { name } = req.body;

  //get all
  const students = await studentModel.find();

  //get byId
  // const students = await studentModel.findById("645010807a2390e9ca65a27e");

  //find by property
  //   const students = await studentModel.find({ name });
  res.send({ success: true, data: students });
};

//desc     update student
//route    PUT /student/
//access   private
exports.updateStudent = async (req, res, next) => {
  //get details from frontend req.body
  const { name, gen } = req.body;

  //get req.user
  const userId = req.user._id;

  const user = await studentModel.findOne({ name });

  if (!user) {
    return res.send({ success: false, messsage: "data not found" });
  }

  if (user.userId.toString() !== userId.toString()) {
    return res.send({ success: false, messsage: "access denied" });
  }

  const student = await studentModel.findByIdAndUpdate(user._id, { gen });

  return res.send({ success: true, data: student });
};

//desc     delete student
//route    DELETE /student/
//access   private
exports.deleteStudent = async (req, res, next) => {
  const { name } = req.body;
  const userId = req.user._id;

  const user = await studentModel.findOne({ name });
  if (!user) {
    return res.send({ success: false, messsage: "data not found" });
  }

  if (user.userId.toString() !== userId.toString()) {
    return res.send({ success: false, messsage: "access denied" });
  }

  //delete with querry
  const student = await studentModel.findOneAndDelete({ name });
  res.send({ success: true, data: student });
};
