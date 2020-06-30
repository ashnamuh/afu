import {
  add, map, filter, reduce,
  pipe, curry,
} from '../afu'

test('curry', () => {
  const curriedAdd = curry(add)
  const add10 = curriedAdd(10)
  const curriedAdd2 = curry((a, b, c, d) => a + b + c + d)

  expect(add10(5)).toBe(15)
  expect(curriedAdd(3, 9)).toBe(12)
  expect(curriedAdd2(1)(2)(3)(4)).toBe(10)
  expect(curriedAdd2(1, 3, 5, 9)).toBe(18)

  const curriedMap = curry(map)
  const curriedFilter = curry(filter)
  const curriedReduce = curry(reduce)

  const f = pipe(
    curriedMap(i => i * 2),
    curriedFilter(i => i < 10),
    curriedReduce((a, b) => a + b),
  )
  expect(f([1, 2, 3, 4, 5])).toBe(20)
})
