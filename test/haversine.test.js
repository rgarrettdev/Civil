const chai = require("chai");
const alogrithm = require("../alogrithms/haversine");

//Assertion Style
const { assert } = require("chai");

describe("Test haversine alogrithm", () => {
  it("Should return that the coordinates are within 50 miles", () => {
    let latitude1 = 51.507222;
    let longitude1 = -0.1275;
    let latitudeLondon = 51.507222;
    let longitudeLondon = -0.1275;
    let result = alogrithm(
      latitude1,
      longitude1,
      latitudeLondon,
      longitudeLondon
    );
    assert.isNumber(result);
    assert.isBelow(result, 50);
  });
  it("Should return that the coordinates are NOT within 50 miles", () => {
    let latitude1 = 53;
    let longitude1 = -20;
    let latitudeLondon = 51.507222;
    let longitudeLondon = -0.1275;
    let result = alogrithm(
      latitude1,
      longitude1,
      latitudeLondon,
      longitudeLondon
    );
    assert.isNumber(result);
    assert.isAbove(result, 50);
  });
  it("Should return an ERROR", () => {
    let latitude1 = "TEST";
    let longitude1 = -20;
    let latitudeLondon = 51.507222;
    let longitudeLondon = -0.1275;
    let result = alogrithm(
      latitude1,
      longitude1,
      latitudeLondon,
      longitudeLondon
    );
    assert.deepEqual(result, -99999);
  });
});
