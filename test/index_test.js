var assert = require('assertive'),
    dc = require('../index'),
    fs = require('fs'),
    knownColors;

knownColors = JSON.parse(fs.readFileSync('./test/known_values.json', 'utf-8'));

describe('dopplr-colors', function(){
  describe('known color-city pairs', function(){
    Object.keys(knownColors).forEach(function(city){
      it('generates the correct color for ' + city, function(){
        var actual, expected;
        expected = knownColors[city];
        actual = dc(city);
        assert.equal(expected, actual);
      });
    });
  });
});
