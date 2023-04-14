

/**
 * Get products from aruhaz by aruhazId
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    // DB query to search for products by aruhaz id (result is an array of products)
    // res.locals.products = result;
    // result is like this: [
    //   {
    //     id: 1,
    //     name: 'Milk',
    //     price: 100,
    //   },
    //   {
    //     id: 2,
    //     name: 'Bread',
    //     price: 200,
    //   },
    //   {
    //     id: 3,
    //     name: 'Eggs',
    //     price: 300,
    //   },
    // ];
  };
};
