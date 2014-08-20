var assert = require('assertive'),
    blueshift = require('../index'),
    fs = require('fs'),
    knownColors;

knownColors = JSON.parse(fs.readFileSync('./test/known_values.json', 'utf-8'));

describe('blueshift', function(){
  describe('known color-city pairs', function(){
    Object.keys(knownColors).forEach(function(city){
      it('generates the correct color for ' + city, function(){
        var actual, expected;
        expected = knownColors[city];
        actual = blueshift(city);
        assert.equal(expected, actual);
      });
    });
  });
});
