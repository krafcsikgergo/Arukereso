/**
 * Searh products in database, returns aruhaz where the product is available
 * @param {*} objectrepository
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    // DB query to search for aruhazak (result is an array of aruhazak)
    // res.locals.aruhazak = result;
    res.locals.keresett = req.query.keresett;
    
    // DB query to get products from aruhazak (result is an array of products)
    res.locals.termekek = [
      {
        aruhazId: 1,
        id: 1,
        name: "Tej",
        price: 100,
      },
      {
        aruhazId: 2,
        id: 2,
        name: "Tej",
        price: 200,
      },
    ];
    res.locals.aruhazak = [
      {
        id: 1,
        name: "Tesco",
        address: "Budapest, Kossuth Lajos utca 1.",
        phone: "+36 1 234 5678",
        email: "tesco1@test.com",
        parking: true,
        opening_hours: "8:00 - 20:00",
      },
      {
        id: 2,
        name: "Aldi",
        address: "Budapest, Kossuth Lajos utca 2.",
        phone: "+36 1 234 5678",
        email: "aldi1@test.com",
        parking: true,
        opening_hours: "8:00 - 20:00",
      },
    ];

    next();
  };
};
