var test = require('tape')
global.requestAnimationFrame = require('raf')
global.cancelAnimationFrame = require('raf').cancel
var rafIterator = require('./')

test('rafIterator', function (t) {
  async function run () {
    var iter = rafIterator()
    t.equal((await iter.next()).value, 0)
    var prevTick = 0
    for await (const tick of iter) {
      t.equal(tick, prevTick + 1)
      prevTick = tick
      if (tick >= 60) break
    }
    t.end()
  }
  run().catch(t.fail)
})
