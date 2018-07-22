function roman_numerals(value) {
  let romans = ['I','V','X']
  let nums = [1,5,10]

  // if(value == 1) {
  //   return 'I'
  // } else if(value == 5) {
  //   return 'V'
  // } else {
  //   return 'X'
  // }

  for(let i=0; i<nums.length; i++) {
    if(value == nums[i]) {
      return romans[i]
    }
  }
}

module.exports = roman_numerals
