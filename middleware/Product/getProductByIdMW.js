
/**
 * Get product by id from DB
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    // DB query to search for product by id (result is a single product)
    // res.locals.product = result;
    res.locals.termek = {
      aruhazId: 1,
      id: 1,
      name: "Tej",
      price: 100
    };
    next();
  };
};
