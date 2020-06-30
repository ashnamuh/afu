import {
  compose, map, filter,
} from '../afu'

test('compose', () => {
  const iterable = [1, 2, 3, 4, 5]
  const result = compose(
    iterable,
    iter => map(i => i * 2, iter),
    iter => filter(i => i <= 5, iter),
  )

  expect(result).toEqual([2, 4])
})
