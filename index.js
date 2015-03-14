module.exports = fa

// returns a closure that returns
// the original value
// @param {Any} val
// @return {Function}
function fa (val) {
  // @return {Any}
  return function fa () {
    return val
  }
}
