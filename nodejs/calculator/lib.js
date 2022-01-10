const PI = 3.14
const square = n => n*n
const cube = n => n*n*n
const double = n => n*2
const triple = n => n*3

const compute = (operation, value) => {
  switch(operation) {
    case "sq":
      return square(value)
    case "cu":
      return cube(value)
    case "dou":
      return double(value)
    case "tri":
      return triple(value)
    default:
      return null
  }
}

module.exports = { compute, PI }