var md5 = require('MD5');

module.exports = function(cityName) {
  return '#' + md5(cityName).substr(0, 6);
};
