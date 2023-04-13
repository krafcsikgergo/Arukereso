const renderMW = require("../middleware/renderMW");
const redirectMW = require("../middleware/redirectMW");

const getAruhazakBySearchMW = require("../middleware/aruhazak/getAruhazakBySearchMW");
const getAruhazByIdMW = require("../middleware/aruhazak/getAruhazByIdMW");
const deleteAruhazMW = require("../middleware/aruhazak/deleteAruhazMW");
const modifyAruhazMW = require("../middleware/aruhazak/modifyAruhazMW");
const newAruhazToDBMW = require("../middleware/aruhazak/newAruhazToDBMW");

const getProductsFromAruhazMW = require("../middleware/termekek/getProductsFromAruhazMW");
const deleteProductMW = require("../middleware/termekek/deleteProductMW");
const newProductToDBMW = require("../middleware/termekek/newProductToDBMW");
const getProductByIdMW = require("../middleware/termekek/getProductByIdMW");
const modifyProductMW = require("../middleware/termekek/modifyProductMW");

module.exports = function (app) {
    const objRepo = {
    };

app.get("/", renderMW(objRepo, "index"));

app.get(
  "/kereses",
  getAruhazakBySearchMW(objRepo),
  renderMW(objRepo, "kereses")
);

app.get("/aruhazak", getAruhazByIdMW(objRepo), renderMW(objRepo, "aruhazak"));

app.get(
  "aruhazak/delete/id/:aruhazId",
  deleteAruhazMW(objRepo),
  redirectMW(objRepo, "/aruhazak")
);

app.get(
  "/aruhazak/edit/id/:aruhazId",
  getAruhazByIdMW(objRepo),
  renderMW(objRepo, "szerkAruhaz.html")
);

app.post(
  "/aruhazak/edit/id/:aruhazId",
  modifyAruhazMW(objRepo),
  redirectMW(objRepo, "/aruhazak")
);

app.get("/aruhazak/new", renderMW(objRepo, "ujAruhaz.html"));

app.post(
  "/aruhazak/new",
  newAruhazToDBMW(objRepo),
  redirectMW(objRepo, "/aruhazak")
);

app.get(
  "/aruhazak/id/:aruhazId",
  getAruhazByIdMW(objRepo),
  getProductsFromAruhazMW(objRepo),
  renderMW(objRepo, "aruhazTermekek")
);

app.get(
  "/aruhazak/id/:aruhazId/deleteProduct/:productId",
  deleteProductMW(objRepo),
  redirectMW(objRepo, "/aruhazak/id/:aruhazId")
);

app.get("/aruhazak/id/:aruhazId/newProduct", renderMW(objRepo, "addProduct"));

app.post(
  "/aruhazak/id/:aruhazId/newProduct",
  newProductToDBMW(objRepo),
  redirectMW(objRepo, "/aruhazak/id/:aruhazId")
);

app.get(
  "/aruhazak/id/:aruhazId/modifyProduct/:productId",
  getProductByIdMW(objRepo),
  renderMW(objRepo, "modifyProduct")
);

app.post(
  "/aruhazak/id/:aruhazId/modifyProduct/:productId",
  modifyProductMW(objRepo),
  redirectMW(objRepo, "/aruhazak/id/:aruhazId")
);
