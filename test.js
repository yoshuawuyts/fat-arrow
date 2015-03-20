require('es6-promise').polyfill()
const test = require('tape')
const fa = require('./')

test('', function (t) {
  t.plan(1)

  Promise.resolve('myVal')
    .then(asyncAction)
    .then(function (val) {
      t.equal(val, 'myVal', 'same value')
    })

  function asyncAction (val) {
    return Promise.resolve('anotherVal')
      .then(fa(val))
  }
})
