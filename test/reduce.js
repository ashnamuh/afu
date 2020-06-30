import test from 'ava'
import {
  reduce,
} from '../index'

test('reduce', t => {
  const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const resultWithInitValue = reduce((acc, current) => acc + current, 10, iterable)
  t.is(resultWithInitValue, 65)

  const result = reduce((acc, current) => acc + current, iterable)
  t.is(result, 55)

  const curriedReduece = reduce((acc, current) => acc + current)
  const curryResult1 = curriedReduece(iterable)

  const curryResult2 = curriedReduece(10, iterable)
  t.is(curryResult1, 55)
  t.is(curryResult2, 65)
})
