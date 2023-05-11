/**
 * Searh products in database, returns aruhaz where the product is available
 * @param {*} objectrepository
 */
module.exports = function (objectrepository) {
  const TermekModel = require("../../models/termek");
  return function (req, res, next) {
    res.locals.keresett = req.query.keresett;
    if (!res.locals.keresett) {
      res.locals.keresett = "";
    }

    TermekModel.find({ name: { $regex: new RegExp('\\b' + res.locals.keresett.trim().replace(/\s+/g, '\\s*') + '\\b', 'i') } })
      .populate("aruhaz")
      .exec((err, termekek) => {
        if (err) {
          return next(err);
        }
        res.locals.termekek = termekek;
        return next();
      });
  };
};
