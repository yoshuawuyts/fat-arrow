# fat-arrow
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Easy returns for if you don't have a `() =>` around. Works well with Promises
when you have to return another value in a `.then()` chain. Actually this is
just a closure-as-a-module.

## Installation
```sh
$ npm install fat-arrow
```

## Usage
```js
const fa = require('fat-arrow')

Promise.resolve('myVal')
  .then(asyncAction)
  // => 'myVal'

function asyncAction(val) {
  return Promise.resolve('anotherVal')
    .then(fa(val))
}
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/fat-arrow.svg?style=flat-square
[npm-url]: https://npmjs.org/package/fat-arrow
[travis-image]: https://img.shields.io/travis/yoshuawuyts/fat-arrow.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/fat-arrow
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/fat-arrow.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/fat-arrow?branch=master
[downloads-image]: http://img.shields.io/npm/dm/fat-arrow.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/fat-arrow
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
