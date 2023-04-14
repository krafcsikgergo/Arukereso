
/**
 * Search for aruhaz by id from the database
 * @param {*} objectrepository 
 * @returns 
 */
modules.exports = function (objectrepository) {
  return function (req, res, next) {
    // DB query to search for aruhaz by id (result is a single aruhaz)
    // res.locals.aruhaz = result;
    // result is like this: {
    // id: 1,
    // name: 'Tesco',
    // address: 'Budapest, Kossuth Lajos utca 1.',
    // phone: '+36 1 234 5678',
    // email: 'example@test.com',
    // parking: true,
    // opening_hours: '8:00 - 20:00',
    // }
  };
};
