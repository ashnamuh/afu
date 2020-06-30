import test from 'ava'
import {
  range,
} from '../index'

test('range', t => {
  const arr1 = range(5)
  t.deepEqual(arr1, [0, 1, 2, 3, 4])

  const arr2 = range(5, 10)
  t.deepEqual(arr2, [5, 6, 7, 8, 9])
})
