import test from 'ava'
import {
  filter,
} from '../index'

test('filter', t => {
  const iterable = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]
  const result = filter(a => a.id > 3, iterable)
  t.is(result.length, 2)
  t.deepEqual(result, [{ id: 4 }, { id: 5 }])

  const curriedFilter = filter(a => a.id < 2)
  const curryResult = curriedFilter(iterable)
  t.is(curryResult.length, 1)
  t.deepEqual(curryResult, [{ id: 1 }])
})
