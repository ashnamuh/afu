import {
  filter,
} from '../afu'

test('filter', () => {
  const iterable = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]
  const result = filter(a => a.id > 3, iterable)
  expect(result.length).toBe(2)
  expect(result).toEqual([{ id: 4 }, { id: 5 }])

  const curriedFilter = filter(a => a.id < 2)
  const curryResult = curriedFilter(iterable)
  expect(curryResult.length).toBe(1)
  expect(curryResult).toEqual([{ id: 1 }])
})
