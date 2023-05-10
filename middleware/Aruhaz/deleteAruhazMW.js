
/**
 * Deletes Aruhaz from the database
 * @param {*} objectrepository 
 */
module.exports = function (objectrepository) {
    const AruhazModel = require("../../models/aruhaz");
    return function (req, res, next) {
        AruhazModel.findByIdAndDelete(req.params.aruhazId, (err, aruhaz) => {
            if (err) {
                return next(err);
            }
        });
        return next();
    };
};