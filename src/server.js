const express = require("express");
const app = express();
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
require("dotenv").config();

const port = process.env.PORT;

//config path & engine .ejs
configViewEngine(app);

//route
app.use("/", webRoutes);

//listeners
app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1/${port}`);
});
