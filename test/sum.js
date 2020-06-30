import test from 'ava'
import {
  sum,
} from '../index'

test('sum', t => {
  const arr = [1, 2, 3, 4, 5, NaN, null, 'string']
  t.is(sum(arr), 15)

  t.is(sum(1, 2, 3), 6)
})
