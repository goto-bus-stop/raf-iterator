# raf-iterator

requestAnimationFrame as an async iterator

Async iterators are very new and work on these platforms (non exhaustive):

 - Firefox 60+
 - Chrome 68+
 - Safari 12
 - Node 10+

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/raf-iterator.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/raf-iterator
[travis-image]: https://img.shields.io/travis/com/goto-bus-stop/raf-iterator.svg?style=flat-square
[travis-url]: https://travis-ci.com/goto-bus-stop/raf-iterator
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install raf-iterator
```

## Usage

```js
const rafIterator = require('raf-iterator')

for await (const tick of rafIterator()) {
  draw(tick)
  if (ended) {
    break
  }
}
```

## API

### `rafIterator()`

Returns an Async Iterator that can be used in a `for await` loop. Each iteration yields an incrementing `tick` integer. Iterations occur at the speed of `requestAnimationFrame` ticks, about 60fps.

`break`ing from the loop prevents further animation frame requests.

## License

[Apache-2.0](LICENSE.md)
