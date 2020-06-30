import {
  map, filter, pipe,
} from '../afu'

test('pipe', () => {
  const iterable = [2, 4, 6, 8, 10]
  const f = pipe(
    iter => map(i => i * 2, iter),
    iter => filter(i => i > 10, iter),
  )

  expect(f(iterable)).toEqual([12, 16, 20])
})
