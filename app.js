const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(PORT, (error) => {
  console.log("Server is running on port 3000");
});
