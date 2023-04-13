

/**
 * Html render middleware
 * @param {*} objectrepository 
 * @param {*} viewName 
 * @returns 
 */
module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        res.render(viewName);
    };
};