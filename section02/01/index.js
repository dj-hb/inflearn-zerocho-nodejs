const { odd, even } = require('./var')
const checkNumber = require('./func')
// checkOddOrEven 함수를 불러옴. 변수명이니까 이름은 바뀌어도 됨
// 하지만 구조분해 할당 사용 시에는 속성명과 변수명이 일치해야 함

// import { odd, even } from './var'
// import checkNumber from './func'

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd
  } else {
    return even
  }
}

console.log(checkNumber(10))
console.log(checkNumber(11))
console.log(checkStringOddOrEven('abcdef'))
console.log(checkStringOddOrEven('abcdefg'))