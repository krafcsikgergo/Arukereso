/**
 * Saves the new product to the database
 * @param {*} objectrepository
 * @returns
 */
module.exports = function (objectrepository) {
  const TermekModel = require("../../models/termek");
  const AruhazModel = require("../../models/aruhaz");

  return function (req, res, next) {
    console.log(req.body.name + " " + req.body.price);
    if (!req.body.name || !req.body.price) {
      return next();
    }

    if (!res.locals.termek) {
      res.locals.termek = new TermekModel();
    }

    res.locals.termek.name = req.body.name;
    res.locals.termek.price = req.body.price;

    AruhazModel.findOne({ _id: req.params.aruhazId }, (err, aruhaz) => {
      if (err) {
        return next(err);
      }

      if (!aruhaz) {
        return next(new Error("Aruhaz not found"));
      }

      res.locals.termek.aruhaz = aruhaz._id;
      return res.locals.termek.save(next);
    });
  };
};
