/**
 * Searh products in database, returns aruhaz where the product is available
 * @param {*} objectrepository
 */
module.exports = function (objectrepository) {
  const TermekModel = require("../../models/termek");
  return function (req, res, next) {
    res.locals.keresett = req.query.keresett;
    if (!res.locals.keresett) {
      return next(new Error("No search term provided"));
    }

    TermekModel.find({ name: res.locals.keresett })
      .populate("aruhaz")
      .exec((err, termekek) => {
        if (err) {
          return next(err);
        }
        res.locals.termekek = termekek;
        console.log(termekek);
        return next();
      });
  };
};
