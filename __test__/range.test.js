import {
  range,
} from '../afu'

test('range', () => {
  const arr1 = range(5)
  expect(arr1).toEqual([0, 1, 2, 3, 4])

  const arr2 = range(5, 10)
  expect(arr2).toEqual([5, 6, 7, 8, 9])
})
