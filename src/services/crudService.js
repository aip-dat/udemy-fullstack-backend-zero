const connection = require("../config/database");

const getAllUsers = async () => {
  var [results, fields] = await connection.query(`SELECT * FROM Users`);
  return results;
};

const getUserById = async (id) => {
  var [results, fields] = await connection.query(
    `SELECT * FROM Users WHERE id=?`,
    [id]
  );
  return results;
};

const updateUserById = async (email, name, city, userId) => {
  var [results, fields] = await connection.query(
    `UPDATE Users 
    SET email = ? , name =?, city = ?
    WHERE id=?;`,
    [email, name, city, userId]
  );
};

const deleteUserById = async (userId) => {
  var [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id=?;`,
    [userId]
  );
};

module.exports = { getAllUsers, updateUserById, getUserById, deleteUserById };
