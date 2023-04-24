const express = require("express");

const {
  get_about,
  get_aboutMe,
  get_home,
  get_services,
} = require("../controllers/controller");

const router = express.Router();

router.route("/").get(get_home);
router.route("/about").get(get_about);
router.route("/about/me").get(get_aboutMe);
router.route("/services").get(get_services);

module.exports = router;
