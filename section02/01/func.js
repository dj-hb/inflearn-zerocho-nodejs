// const value = require('./var')
// console.log(value);

const { odd, even } = require('./var')
// console.log(odd)
// console.log(even)

// import { odd, even } from './var'

function checkOddOrEven(num) {
  if (num % 2) {
    return odd
  } else {
    return even
  }
}

// module.exports = {
//   checkOddOrEven,
//   odd,
//   even,
// }

module.exports = checkOddOrEven

// export default checkOddOrEven