/**
 * Search for aruhaz by id from the database
 * @param {*} objectrepository
 * @returns
 */
module.exports = function (objectrepository) {
  const AruhazModel = require("../../models/aruhaz");
  return function (req, res, next) {
    // DB query to search for aruhaz by id (result is a single aruhaz)
    AruhazModel.findOne({ _id: req.params.aruhazId }, (err, aruhaz) => {
      if (err) {
        return next(err);
      }
      res.locals.aruhaz = aruhaz;

      return next();
    });
  };
};
