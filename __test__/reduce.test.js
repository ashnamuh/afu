import {
  reduce,
} from '../afu'

test('reduce', () => {
  const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const resultWithInitValue = reduce((acc, current) => acc + current, 10, iterable)
  expect(resultWithInitValue).toBe(65)

  const result = reduce((acc, current) => acc + current, iterable)
  expect(result).toBe(55)

  const curriedReduece = reduce((acc, current) => acc + current)
  const curryResult1 = curriedReduece(iterable)

  const curryResult2 = curriedReduece(10, iterable)
  expect(curryResult1).toBe(55)
  expect(curryResult2).toBe(65)
})
