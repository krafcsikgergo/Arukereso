
/**
 * Get product by id from DB
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
  const TermekModel = require("../../models/termek");
  return function (req, res, next) {
    
    console.log(req.params.termekId);
    TermekModel.findOne({ _id: req.params.termekId }, (err, termek) => {
      if (err) {
        return next(err);
      }
      res.locals.termek = termek;
      console.log(res.locals.termek);
      return next();
    });
    
  };
};
