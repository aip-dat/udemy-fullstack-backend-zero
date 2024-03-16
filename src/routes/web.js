const express = require("express");
const {
  getHomePage,
  getCreate,
  postCreateUser,
  getEdit,
  postUpdateUser,
  getDelete,
  postDeleteUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/create", getCreate);
router.get("/edit/:id", getEdit);
router.get("/delete/:id", getDelete);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user", postDeleteUser);

module.exports = router;
