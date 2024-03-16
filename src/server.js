const express = require("express");
const app = express();
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");
const connection = require("./config/database");

require("dotenv").config();

const port = process.env.PORT;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config path & engine .ejs
configViewEngine(app);

//route
app.use("/", webRoutes);

//listeners
app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
