const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

// '/' route
app.get("/", renderMW(objRepo, "index"));
app.post("/", getAruhazakBySearchMW(objRepo), renderMW(objRepo, "kereses"));

// '/aruhazak' route
app.get(
  "/aruhazak",
  getAruhazakBySearchMW(objRepo),
  renderMW(objRepo, "aruhazak")
);
app.post(
  "/aruhazak",
  getAruhazakBySearchMW(objRepo),
  redirectMW(objRepo, "kereses")
);

app.post(
  "aruhazak/delete/id/:aruhazId",
  deleteAruhazMW(objRepo),
  redirectMW(objRepo, "aruhazak")
);

app.get(
  "/aruhazak/id/:aruhazId",
  getAruhazByIdDBMW(objRepo),
  getProductsFromAruhazMW(objRepo),
  renderMW(objRepo, "aruhazTermekek")
);

app.post(
  "/aruhazak/id/:aruhazId/deleteProduct/:productId",
  deleteProductMW(objRepo),
  redirectMW(objRepo, "aruhazTermekek")
);

app.get("/aruhazak/id/:aruhazId/newProduct", renderMW(objRepo, "addProduct"));

app.post(
  "/aruhazak/id/:aruhazId/newProduct",
  newProductToDBMW(objRepo),
  redirectMW(objRepo, "aruhazTermekek")
);

app.get(
  "/aruhazak/id/:aruhazId/modifyProduct/:productId",
  getProductByIdMW(objRepo),
  renderMW(objRepo, "modifyProduct")
);
app.post(
  "/aruhazak/id/:aruhazId/modifyProduct/:productId",
  modifyProductMW(objRepo),
  redirectMW(objRepo, "aruhazTermekek")
);

app.get(
  "/aruhazak/edit/id/:aruhazId",
  getAruhazByIdDBMW(objRepo),
  renderMW(objRepo, "szerkAruhaz.html")
);
app.post("/aruhazak/edit/id/:aruhazId");








app.listen(PORT, (error) => {
  console.log("Server is running on port 3000");
});
