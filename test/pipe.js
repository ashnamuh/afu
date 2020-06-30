import test from 'ava'
import {
  map, filter, pipe,
} from '../index'

test('pipe', t => {
  const iterable = [2, 4, 6, 8, 10]
  const f = pipe(
    iter => map(i => i * 2, iter),
    iter => filter(i => i > 10, iter),
  )

  t.deepEqual(f(iterable), [12, 16, 20])
})
