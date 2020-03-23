var md5 = require("md5");

const blueshift = (cityName) => `#${md5(cityName).substr(0, 6)}`;

module.exports = blueshift;
