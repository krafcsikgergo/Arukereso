
/**
 * Redirects to the given endpoint
 * @param {*} objectrepository 
 * @param {*} endpoint 
 * @returns 
 */
module.exports = function (objectrepository, endpoint) {
    return function (req, res, next) {
        return res.redirect(endpoint);
    };
}