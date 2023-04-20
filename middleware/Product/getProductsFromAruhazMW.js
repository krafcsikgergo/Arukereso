

/**
 * Get products from aruhaz by aruhazId
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    // DB query to search for products by aruhaz id (result is an array of products)
    // res.locals.products = result;
    res.locals.termekek = [
      {
        aruhazId: 1,
        id: 1,
        name: "Tej",
        price: 100,
      },
      {
        aruhazId: 1,
        id: 2,
        name: "Kenyér",
        price: 200,
      },
      {
        aruhazId: 1,
        id: 3,
        name: "Zsemle",
        price: 300,
      },
    ];
    next();
  };
};
