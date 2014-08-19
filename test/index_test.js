var assert = require('assertive'),
    dc = require('../index'),
    fs = require('fs');

KNOWN_COLORS = JSON.parse(fs.readFileSync('./test/known_values.json', 'utf-8'));

describe('dopplr-colors', function(){
  describe('known color-city pairs', function(){
    Object.keys(KNOWN_COLORS).forEach(function(city){
      it('generates the correct color for ' + city, function(){
        var actual, expected;
        expected = KNOWN_COLORS[city];
        actual = dc(city);
        assert.equal(expected, actual);
      });
    });
  });
});
