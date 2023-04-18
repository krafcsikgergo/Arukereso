const express = require("express");

const app = express();
const PORT = 3000;

const routes = require("./routes/routes");
console.log(routes);
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(routes);
app.listen(PORT, (error) => {
  console.log("Server is running on port 3000");
});
