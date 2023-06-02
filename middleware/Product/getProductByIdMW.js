
/**
 * Get product by id from DB
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    
    objectrepository.TermekModel.findOne({ _id: req.params.termekId }, (err, termek) => {
      if (err) {
        return next(err);
      }
      res.locals.termek = termek;
      return next();
    });
    
  };
};
