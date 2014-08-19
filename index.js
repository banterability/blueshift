var md5 = require('MD5');

module.exports = colorForCity = function(cityName) {
  return '#' + md5(cityName).substr(0, 6);
};
