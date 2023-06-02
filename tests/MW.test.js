const modifyAruhazMW = require("../middleware/Aruhaz/modifyAruhazMW");
const getProductByID = require("../middleware/Product/getProductByIdMW");
const expect = require("chai").expect;

let objectRepository = {
  AruhazModel: {
    findByIdAndUpdate: (id, update, cb) => {
      cb(undefined, update.$set);
    },
  },
  TermekModel: {
    findOne: (id, cb) => {
      cb(undefined, {
        _id: "1",
        name: "Alma",
        price: "1000"
      });
  }
}
};

describe("modifyAruhaz middleware", () => {
  it("should modify aruhaz with given data", (done) => {
    const mw = modifyAruhazMW(objectRepository);

    const req = {
      body: {
        name: "Test Name",
        address: "Test Address",
        phone: "123456789",
        email: "test@test.com",
        parking: "on",
        opening_hours: "0:00-24:00",
      },
      params: {
        aruhazId: "1",
      },
    };

    const res = {
      locals: {},
    };

    mw(req, res, (err) => {
      expect(res.locals.aruhaz).to.eql({
        name: "Test Name",
        address: "Test Address",
        phone: "123456789",
        email: "test@test.com",
        parking: true,
        opening_hours: "0:00-24:00",
      });
      expect(err).to.eql(undefined);
      done();
    }
    );
  });
});

describe("getProductById middleware", () => {
  it("should get product by id from params", (done) => {
    const mw = getProductByID(objectRepository);

    const req = {
      params: {
        termekId: "1",
      },
    };

    const res = {
      locals: {},
    };

    mw(req, res, (err) => {
      expect(res.locals.termek).to.eql({
        _id: "1",
        name: "Alma",
        price: "1000"
      });
      expect(err).to.eql(undefined);
      done();
    }
    );
  });
});