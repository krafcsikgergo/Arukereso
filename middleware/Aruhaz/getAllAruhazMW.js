

module.exports = function (objectrepository) {
  return function (req, res, next) {
    // DB query to search for all aruhaz (result is an array of aruhaz)
    res.locals.aruhazak = [
        {
            id: 1,
            name: "Tesco",
            address: "Budapest, Kossuth Lajos utca 1.",
            phone: "+36 1 234 5678",
            email: "tesco1@test.com",
            parking: true,
            opening_hours: "8:00 - 20:00"
        },
        {
            id: 2,
            name: "Aldi",
            address: "Budapest, Kossuth Lajos utca 2.",
            phone: "+36 2 234 5678",
            email: "aldi1@test.com",
            parking: true,
            opening_hours: "8:00 - 20:00"
        },
        {
            id: 3,
            name: "Lidl",
            address: "Budapest, Kossuth Lajos utca 3.",
            phone: "+36 3 234 5678",
            email: "lidl1@test.com",
            parking: false,
            opening_hours: "8:00 - 20:00"
        }];
        next();
  };
};
