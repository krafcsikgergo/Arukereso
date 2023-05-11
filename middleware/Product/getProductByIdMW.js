
/**
 * Get product by id from DB
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
  const TermekModel = require("../../models/termek");
  return function (req, res, next) {
    
    TermekModel.findOne({ _id: req.params.termekId }, (err, termek) => {
      if (err) {
        return next(err);
      }
      res.locals.termek = termek;
      return next();
    });
    
  };
};
