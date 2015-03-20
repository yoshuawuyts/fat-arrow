module.exports = fa

// returns a closure that returns the original value
// Any:val -> (Function -> Any)
function fa (val) {
  return function fa () {
    return val
  }
}
