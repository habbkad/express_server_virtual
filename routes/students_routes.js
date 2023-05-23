const express = require("express");

const {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/students_controller");

const { protect } = require("../middlewares/auth");

const router = express.Router();

router
  .route("/students")
  .post(protect, createStudent)
  .get(protect, getStudents)
  .put(protect, updateStudent)
  .delete(protect, deleteStudent);

module.exports = router;
