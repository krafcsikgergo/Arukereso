const express = require("express");

const app = express();
const PORT = 3000;

const db = require('./config/db');

const routes = require("./routes/routes");
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(routes);
app.listen(PORT, (error) => {
  console.log("Server is running on port http://localhost:3000");
});
