/**
 * Modify aruhaz data in database
 * @param {*} objectrepository
 * @returns
 */
module.exports = function (objectrepository) {
  const AruhazModel = require("../../models/aruhaz");
  return function (req, res, next) {
    if (
      typeof req.body.name === "undefined" ||
      typeof req.body.address === "undefined" ||
      typeof req.body.phone === "undefined" ||
      typeof req.body.email === "undefined" ||
      typeof req.body.opening_hours === "undefined"
    ) {
      return next();
    }
    if (req.body.parking === "on") {
      req.body.parking = true;
    } else {
      req.body.parking = false;
    }

    res.locals.aruhaz = AruhazModel.findByIdAndUpdate(
      req.params.aruhazId,
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          email: req.body.email,
          parking: req.body.parking,
          opening_hours: req.body.opening_hours,
        },
      },
      (err, aruhaz) => {
        if (err) {
          return next(err);
        }
      }
    );

    next();
  };
};
