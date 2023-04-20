
/**
 * Search for aruhaz by id from the database
 * @param {*} objectrepository 
 * @returns 
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    // DB query to search for aruhaz by id (result is a single aruhaz)
    res.locals.aruhaz = {
      id: 1,
      name: "Tesco",
      address: "Budapest, Kossuth Lajos utca 1.",
      phone: "+36 1 234 5678",
      email: "tesco1@test.com",
      parking: true,
      opening_hours: "8:00 - 20:00"
    };
    next();
  };
};
