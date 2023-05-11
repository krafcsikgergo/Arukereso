const { options } = require("../../routes/routes");

module.exports = function () {
  const TermekModel = require("../../models/termek");
  return function (req, res, next) {
    TermekModel.find(
      { aruhaz: req.params.aruhazId, name: { $regex: new RegExp('\\b' + req.query.filter.trim().replace(/\s+/g, '\\s*') + '\\b', 'i') } },
      (err, termekek) => {
        if (err) {
          return next(err);
        }
        res.locals.termekek = termekek;
        return next();
      }
    );
  };
};
