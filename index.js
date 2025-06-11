const crypto = require("crypto");

const blueshift = (cityName) =>
  `#${crypto.createHash("md5").update(cityName).digest("hex").substring(0, 6)}`;

module.exports = blueshift;
