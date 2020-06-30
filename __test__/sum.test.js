import {
  sum,
} from '../afu'

test('sum', () => {
  const arr = [1, 2, 3, 4, 5, NaN, null, 'string']
  expect(sum(arr)).toBe(15)

  expect(sum(1, 2, 3)).toBe(6)
})
