const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Coordinates API Endpoint", () => {
  /**
   * Test for the GET route
   */
  describe("Get /coordinates", () => {
    it("It should get all the people who are within 50 miles", (done) => {
      chai
        .request("http://localhost:3000")
        .get("/coordinates")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(3);
          done();
        });
    });
  });
  describe("Spelling Mistake: Get /cordinates", () => {
    it("It should not get all the people who are within 50 miles", (done) => {
      chai
        .request("http://localhost:3000")
        .get("/cordinates")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });
});
