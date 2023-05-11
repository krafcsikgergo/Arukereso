
/**
 * Deletes Aruhaz from the database
 * @param {*} objectrepository 
 */
module.exports = function (objectrepository) {
    const AruhazModel = require("../../models/aruhaz");
    const TermekModel = require("../../models/termek");
    return function (req, res, next) {
        AruhazModel.findByIdAndDelete(req.params.aruhazId, (err, aruhaz) => {
            if (err) {
                return next(err);
            }
            TermekModel.deleteMany({ aruhaz: req.params.aruhazId }, (err) => {
                if (err) {
                    return next(err);
                }   
            });
            return next();
        });
    };
};