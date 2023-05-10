module.exports = function (objectrepository) {
  const AruhazModel = require("../../models/aruhaz");
  return function (req, res, next) {
    // DB query to search for all aruhaz (result is an array of aruhaz)
    AruhazModel.find({}, (err, aruhazak) => {
      if (err) {
        return next(err);
      }
      res.locals.aruhazak = aruhazak;

      return next();
    });
  };
};
