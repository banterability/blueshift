const blueshift = require("./index.js");

const KNOWN_COLORS = {
  Austin: "#54c326",
  Chicago: "#9cfa1e",
  Fargo: "#02d55b",
  Houston: "#a25b2d",
  Knoxville: "#e3697e",
  "Las Vegas": "#05c27b",
  Minneapolis: "#c39584",
  "New York": "#87809c",
  "Palo Alto": "#04ec30",
  "San Francisco": "#f4334f",
};

describe("blueshift", () => {
  Object.keys(KNOWN_COLORS).forEach((city) => {
    test(`generates the expected color for ${city}`, () => {
      expect(blueshift(city)).toEqual(KNOWN_COLORS[city]);
    });
  });
});
