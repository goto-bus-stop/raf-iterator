/**
 * Returns an Async Iterator that can be used in a `for await` loop. Each
 * iteration yields an incrementing `tick` integer. Iterations occur at the
 * speed of `requestAnimationFrame` ticks, about 60fps.
 *
 * `break`ing from the loop prevents further animation frame requests.
 *
 * ## Example
 *
 * ```js
 * import rafIterator from 'raf-iterator'
 *
 * for await (const tick of rafIterator()) {
 *   draw(tick)
 *   if (ended) {
 *     break
 *   }
 * }
 * ```
 */
declare function rafIterator (): AsyncIterable<number, void, void>

export = rafIterator
