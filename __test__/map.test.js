import {
  map,
} from '../afu'

test('map', () => {
  const iterable = [1, 2, 3, 4, 5]
  const result = map(a => a * a, iterable)
  expect(result).toEqual([1, 4, 9, 16, 25])

  const curriedMap = map(a => a + 1)
  const curryResult = curriedMap(iterable)
  expect(curryResult).toEqual([2, 3, 4, 5, 6])
})
