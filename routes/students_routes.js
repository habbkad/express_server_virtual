const express = require("express");

const {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/students_controller");

const router = express.Router();

router
  .route("/students")
  .post(createStudent)
  .get(getStudents)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
