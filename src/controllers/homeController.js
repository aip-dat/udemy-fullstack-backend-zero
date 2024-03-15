const connection = require("../config/database.js");
const { getAllUsers } = require("../services/crudService.js");

const getHomePage = async (req, res, next) => {
  var results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getCreate = (req, res) => {
  return res.render("create.ejs");
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

  console.log(">>>", results);

  res.send("Result:", email, name, city);
};

module.exports = { getHomePage, getCreate, postCreateUser };
