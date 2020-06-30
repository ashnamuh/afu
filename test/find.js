import test from 'ava'
import {
  find,
} from '../index'

test('find', t => {
  const iterable = [
    { id: 1, value: 6 },
    { id: 2, value: 11 },
    { id: 3, value: 13 },
    { id: 4, value: 2 },
    { id: 5, value: 19 },
  ]
  const result = find(a => a.value > 10, iterable)
  t.is(result.id, 2)
  t.deepEqual(result, { id: 2, value: 11 })

  const noResult = find(a => a.value > 20, iterable)
  t.is(noResult, undefined)

  const curriedFind = find(a => a.value > 10)
  const curryResult = curriedFind(iterable)
  t.is(curryResult.id, 2)
  t.deepEqual(curryResult, { id: 2, value: 11 })
})
