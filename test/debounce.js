import test from 'ava'
import {
  debounce,
} from '../index'

test('debounce', t => {
  let callCount = 0

  const debounced = debounce(value => {
    ++callCount
    return value
  }, 32)

  const result1 = [debounced('a'), debounced('b'), debounced('c')]
  t.deepEqual(result1, [undefined, undefined, undefined])
  t.is(callCount, 0)

  setTimeout(() => {
    t.is(callCount, 1)

    const result2 = [debounced('d'), debounced('e'), debounced('f')]
    t.deepEqual(result2, ['c', 'c', 'c'])
    t.is(callCount, 1)
  }, 128)
})
