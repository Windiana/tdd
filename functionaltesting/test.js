var expect = require('chai').expect
var roman_numerals = require('./index')

describe('Roman Numerals', function() {
  it('should return I if value 1', function() {
    expect(roman_numerals(1)).to.equal('I')
  })

  it('should return V if value 5', function() {
    expect(roman_numerals(5)).to.equal('V')
  })

  it('should return X if value 10', function() {
    expect(roman_numerals(10)).to.equal('X')
  })

})
