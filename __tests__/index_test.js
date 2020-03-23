var blueshift = require("../index");
var knownColors = require("./known_values.json");

describe("blueshift", () => {
  Object.keys(knownColors).forEach((city) => {
    test(`generates the expected color for ${city}`, () => {
      expect(blueshift(city)).toEqual(knownColors[city]);
    });
  });
});
