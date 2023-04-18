const express = require("express");
const router = express.Router();

const renderMW = require("../middleware/renderMW");
const redirectMW = require("../middleware/redirectMW");

const getAruhazakBySearchMW = require("../middleware/Aruhaz/getAruhazakBySearchMW");
const getAruhazByIdMW = require("../middleware/Aruhaz/getAruhazByIdMW");
const deleteAruhazMW = require("../middleware/Aruhaz/deleteAruhazMW");
const modifyAruhazMW = require("../middleware/Aruhaz/modifyAruhazMW");
const newAruhazToDBMW = require("../middleware/Aruhaz/newAruhazToDBMW");

const getProductsFromAruhazMW = require("../middleware/Product/getProductsFromAruhazMW");
const deleteProductMW = require("../middleware/Product/deleteProductMW");
const newProductToDBMW = require("../middleware/Product/newProductToDBMW");
const getProductByIdMW = require("../middleware/Product/getProductByIdMW");
const modifyProductMW = require("../middleware/Product/modifyProductMW");

const objRepo = {};

router.get("/", renderMW(objRepo, "index"));

router.get(
  "/kereses",
  getAruhazakBySearchMW(objRepo),
  renderMW(objRepo, "kereses")
);

router.get("/aruhazak", getAruhazByIdMW(objRepo), renderMW(objRepo, "aruhazak"));

router.get(
  "aruhazak/delete/id/:aruhazId",
  deleteAruhazMW(objRepo),
  redirectMW(objRepo, "/aruhazak")
);

router.get(
  "/aruhazak/edit/id/:aruhazId",
  getAruhazByIdMW(objRepo),
  renderMW(objRepo, "szerkAruhaz.html")
);

router.post(
  "/aruhazak/edit/id/:aruhazId",
  modifyAruhazMW(objRepo),
  redirectMW(objRepo, "/aruhazak")
);

router.get("/aruhazak/new", renderMW(objRepo, "ujAruhaz.html"));

router.post(
  "/aruhazak/new",
  newAruhazToDBMW(objRepo),
  redirectMW(objRepo, "/aruhazak")
);

router.get(
  "/aruhazak/id/:aruhazId",
  getAruhazByIdMW(objRepo),
  getProductsFromAruhazMW(objRepo),
  renderMW(objRepo, "aruhazTermekek")
);

router.get(
  "/aruhazak/id/:aruhazId/deleteProduct/:productId",
  deleteProductMW(objRepo),
  redirectMW(objRepo, "/aruhazak/id/:aruhazId")
);

router.get("/aruhazak/id/:aruhazId/newProduct", renderMW(objRepo, "addProduct"));

router.post(
  "/aruhazak/id/:aruhazId/newProduct",
  newProductToDBMW(objRepo),
  redirectMW(objRepo, "/aruhazak/id/:aruhazId")
);

router.get(
  "/aruhazak/id/:aruhazId/modifyProduct/:productId",
  getProductByIdMW(objRepo),
  renderMW(objRepo, "modifyProduct")
);

router.post(
  "/aruhazak/id/:aruhazId/modifyProduct/:productId",
  modifyProductMW(objRepo),
  redirectMW(objRepo, "/aruhazak/id/:aruhazId")
);

module.exports = router;