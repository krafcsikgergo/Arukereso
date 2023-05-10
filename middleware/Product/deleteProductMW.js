
/**
 * Deletes a product from the database
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
  const TermekModel = require("../../models/termek");
  return function (req, res, next) {
    TermekModel.findByIdAndDelete(req.params.termekId, (err, termek) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  };
};