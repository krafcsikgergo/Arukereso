/**
 * Get products from aruhaz by aruhazId
 * @param {*} objectrepository
 * @returns
 */
module.exports = function (objectrepository) {
  const TermekModel = require("../../models/termek");
  return function (req, res, next) {
    // DB query to search for products by aruhaz id (result is an array of products)
    // res.locals.products = result;
    TermekModel.find(
      { aruhaz: req.params.aruhazId },
      (err, termekek) => {
        if (err) {
          return next(err);
        }
        res.locals.termekek = termekek;
        return next();
      }
    );
  };
};
