/**
 * Saves the new aruhaz to the database
 * @param {*} objectrepository
 * @returns
 */

const AruhazModel = require("../../models/aruhaz");
module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log(req.body);
    if (
      typeof req.body.name === "undefined" ||
      typeof req.body.address === "undefined" ||
      typeof req.body.phone === "undefined" ||
      typeof req.body.email === "undefined" ||
      typeof req.body.parking === "undefined" ||
      typeof req.body.opening_hours === "undefined"
    ) {
      return next();
    }
    if (res.locals.aruhaz === undefined) {
      res.locals.aruhaz = new AruhazModel();
    }

    if (req.body.parking === "on") {
      req.body.parking = true;
    }
    else {
      req.body.parking = false;
    }

    res.locals.aruhaz.name = req.body.name;
    res.locals.aruhaz.address = req.body.address;
    res.locals.aruhaz.phone = req.body.phone;
    res.locals.aruhaz.email = req.body.email;
    res.locals.aruhaz.parking = req.body.parking;
    res.locals.aruhaz.opening_hours = req.body.opening_hours;
    res.locals.aruhaz.save((err) => {
      if (err) {
        return next(err);
      }
    });

    console.log(res.locals.aruhaz);
    next();
  };
};
