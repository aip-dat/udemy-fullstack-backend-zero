const express = require("express");
const {
  getHomePage,
  getCreate,
  postCreateUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/create", getCreate);
router.post("/create-user", postCreateUser);

module.exports = router;
