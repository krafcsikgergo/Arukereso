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
const getSearchedProductsFromAruhazMW = require("../middleware/Product/getSearchedProductsFromAruhazMW");
const deleteProductMW = require("../middleware/Product/deleteProductMW");
const newProductToDBMW = require("../middleware/Product/newProductToDBMW");
const getProductByIdMW = require("../middleware/Product/getProductByIdMW");
const modifyProductMW = require("../middleware/Product/modifyProductMW");
const getAllAruhazMW = require("../middleware/Aruhaz/getAllAruhazMW");

const objRepo = {};

router.get("/", renderMW(objRepo, "index"));

router.get(
  "/kereses",
  getAruhazakBySearchMW(objRepo),
  renderMW(objRepo, "kereses")
);

router.get("/aruhazak", getAllAruhazMW(objRepo), renderMW(objRepo, "aruhazak"));

router.post(
  "/aruhazak/delete/id/:aruhazId",
  deleteAruhazMW(objRepo),
  redirectMW(objRepo, "/aruhazak")
);

router.get(
  "/aruhazak/edit/id/:aruhazId",
  getAruhazByIdMW(objRepo),
  renderMW(objRepo, "szerkAruhaz")
);

router.post(
  "/aruhazak/edit/id/:aruhazId",
  modifyAruhazMW(objRepo),
  redirectMW(objRepo, "/aruhazak")
);

router.get("/aruhazak/new", renderMW(objRepo, "ujAruhaz"));

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

router.get("/aruhazak/id/:aruhazId/filtered",
  getAruhazByIdMW(objRepo),
  getSearchedProductsFromAruhazMW(objRepo),
  renderMW(objRepo, "aruhazTermekek")
);

router.post(
  "/aruhazak/id/:aruhazId/deleteProduct/:termekId",
  deleteProductMW(objRepo),
  (req, res, next) => {
    res.redirect(`/aruhazak/id/${req.params.aruhazId}`);
  }
);

router.get(
  "/aruhazak/id/:aruhazId/newProduct",
  getAruhazByIdMW(objRepo),
  renderMW(objRepo, "addProduct")
);

router.post(
  "/aruhazak/id/:aruhazId/newProduct",
  newProductToDBMW(objRepo),
  (req, res, next) => {
    res.redirect(`/aruhazak/id/${req.params.aruhazId}`);
  }
);

router.get(
  "/aruhazak/id/:aruhazId/modifyProduct/:termekId",
  getAruhazByIdMW(objRepo),
  getProductByIdMW(objRepo),
  renderMW(objRepo, "modifyProduct")
);

router.post(
  "/aruhazak/id/:aruhazId/modifyProduct/:termekId",
  modifyProductMW(objRepo),
  (req, res, next) => {
    res.redirect(`/aruhazak/id/${req.params.aruhazId}`);
  }
);

module.exports = router;
