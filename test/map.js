import test from 'ava'
import {
  map,
} from '../index'

test('map', t => {
  const iterable = [1, 2, 3, 4, 5]
  const result = map(a => a * a, iterable)
  t.deepEqual(result, [1, 4, 9, 16, 25])

  const curriedMap = map(a => a + 1)
  const curryResult = curriedMap(iterable)
  t.deepEqual(curryResult, [2, 3, 4, 5, 6])
})
