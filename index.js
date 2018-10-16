var asyncIterator = '@@asyncIterator'
if (typeof Symbol === 'function') {
  asyncIterator = Symbol.asyncIterator || Symbol.for('asyncIterator')
}

module.exports = function rafIterator () {
  var tick = 0
  var frame

  var obj = {
    next: function () {
      return new Promise(function (resolve) {
        frame = requestAnimationFrame(function () {
          resolve({ value: tick++, done: false })
        })
      })
    },
    return: function () {
      cancelAnimationFrame(frame)
      return { value: tick, done: true }
    }
  }

  obj[asyncIterator] = function () { return obj }

  return obj
}
