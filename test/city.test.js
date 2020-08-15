const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe("City API Endpoint", () => {
  /**
   * Test for the GET route
   */
  describe("Get /city", () => {
    it("It should get all the people who live in London", (done) => {
      chai
        .request("http://localhost:3000")
        .get("/city")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(6);
          done();
        });
    });
  });
  describe("Spelling Mistake: Get /ctiy", () => {
    it("It should not get all the people who live in London", (done) => {
      chai
        .request("http://localhost:3000")
        .get("/ctiy")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });
});
