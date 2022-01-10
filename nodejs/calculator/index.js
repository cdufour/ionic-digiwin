const { compute, PI } = require("./lib")

const [ _, __, fn, val ] = process.argv

console.log(
  compute(fn, parseInt(val))
)

//console.log("PI vaut: ", PI)





