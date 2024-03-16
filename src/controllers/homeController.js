const connection = require("../config/database.js");
const {
  getAllUsers,
  updateUserById,
  getUserById,
  deleteUserById,
} = require("../services/crudService.js");

const getHomePage = async (req, res, next) => {
  var results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getCreate = (req, res) => {
  return res.render("create.ejs");
};

const getEdit = async (req, res) => {
  const userId = req.params.id;

  var results = await getUserById(userId);

  var user = results && results.length > 0 ? results[0] : {};

  return res.render("edit.ejs", { user: user });
};

const postCreateUser = async (req, res) => {
  var email = req.body.email;
  var name = req.body.name;
  var city = req.body.city;

  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //   VALUES(?, ?, ?)`,
  //   [email, name, city],
  //   function (err, result) {
  //     console.log(err, result);
  //   }
  // );

  var [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );

  //console.log(">>>", results);

  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  var email = req.body.email;
  var name = req.body.name;
  var city = req.body.city;
  var userId = req.body.id;

  await updateUserById(city, email, name, userId);

  res.redirect("/");
};

const getDelete = async (req, res) => {
  const userId = req.params.id;

  var results = await getUserById(userId);

  var user = results && results.length > 0 ? results[0] : {};

  return res.render("delete.ejs", { user: user });
};

const postDeleteUser = async (req, res) => {
  const userId = req.body.id;

  await deleteUserById(userId);

  res.redirect("/");
};

module.exports = {
  getHomePage,
  getCreate,
  postCreateUser,
  getEdit,
  postUpdateUser,
  getDelete,
  postDeleteUser,
};
