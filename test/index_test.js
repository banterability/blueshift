var assert = require("assertive");

var blueshift = require("../index");
var knownColors = require("./known_values.json");

describe("blueshift", function() {
  Object.keys(knownColors).forEach(function(city) {
    it("generates the correct color for " + city, function() {
      var expected = knownColors[city];
      assert.equal(expected, blueshift(city));
    });
  });
});
