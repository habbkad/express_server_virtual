const express = require("express");

const { signUpuser, loginUser } = require("../controllers/auth_controller");

const router = express.Router();

router.route("/user").post(signUpuser);
router.route("/login").post(loginUser);
module.exports = router;
