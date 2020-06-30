import test from 'ava'
import {
  compose, map, filter,
} from '../index'

test('compose', t => {
  const iterable = [1, 2, 3, 4, 5]
  const result = compose(
    iterable,
    iter => map(i => i * 2, iter),
    iter => filter(i => i <= 5, iter),
  )

  t.deepEqual(result, [2, 4])
})
