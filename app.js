const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(routes);
app.listen(PORT, (error) => {
  console.log("Server is running on port http://localhost:3000"
  + "\n--------------------------------------------------\n" + 
  "Db is running on port http://localhost:8081");
});
