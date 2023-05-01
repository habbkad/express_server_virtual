const studentModel = require("../models/student_model");

//desc     create new student
//route    POST /student/
//access   private
exports.createStudent = async (req, res, next) => {
  const { name, age, gen } = req.body;

  try {
    const student = new studentModel({ name, age, gen });
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
  //updating by id
  //   const student = await studentModel.findByIdAndUpdate(
  //     "645010757a2390e9ca65a27c",
  //     { name: "Sam Generals" }
  //   );

  //updating by data search
  const student = await studentModel.updateOne(
    { name: "Kingsly" },
    { name: "Kingsley" }
  );

  res.send({ success: true, data: student });
};

//desc     delete student
//route    DELETE /student/
//access   private
exports.deleteStudent = async (req, res, next) => {
  //delet with querry
  const student = await studentModel.findOneAndDelete({ name: "Sarah yu" });
  res.send({ success: true, data: student });
};
