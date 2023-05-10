/**
 * Search for aruhaz by id from the database
 * @param {*} objectrepository
 * @returns
 */
module.exports = function (objectrepository) {
  const AruhazModel = require("../../models/aruhaz");
  return function (req, res, next) {
    AruhazModel.findOne({ _id: req.params.aruhazId }, (err, aruhaz) => {
      if (err) {
        return next(err);
      }
      res.locals.aruhaz = aruhaz;

      return next();
    });
  };
};
