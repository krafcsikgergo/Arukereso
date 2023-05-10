
/**
 * Modify product data in database
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
  const TermekModel = require("../../models/termek");
  return function (req, res, next) {
    if (req.body.name === undefined || req.body.price === undefined) {
      return next();
    }
    res.locals.termek = TermekModel.findByIdAndUpdate(
      req.params.termekId,
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
        },
      },
      (err, termek) => {
        if (err) {
          return next(err);
        }
      }
    );
    console.log(res.locals.termek);
    return next();
  };
};
