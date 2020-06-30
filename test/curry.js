import test from 'ava'
import {
  add, map, filter, reduce,
  pipe, curry,
} from '../index'

test('curry', t => {
  const curriedAdd = curry(add)
  const add10 = curriedAdd(10)
  const curriedAdd2 = curry((a, b, c, d) => a + b + c + d)

  t.is(add10(5), 15)
  t.is(curriedAdd(3, 9), 12)
  t.is(curriedAdd2(1)(2)(3)(4), 10)
  t.is(curriedAdd2(1, 3, 5, 9), 18)

  const curriedMap = curry(map)
  const curriedFilter = curry(filter)
  const curriedReduce = curry(reduce)

  const f = pipe(
    curriedMap(i => i * 2),
    curriedFilter(i => i < 10),
    curriedReduce((a, b) => a + b),
  )
  t.is(f([1, 2, 3, 4, 5]), 20)
})
