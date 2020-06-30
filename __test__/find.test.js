import {
  find,
} from '../afu'

test('find', () => {
  const iterable = [
    { id: 1, value: 6 },
    { id: 2, value: 11 },
    { id: 3, value: 13 },
    { id: 4, value: 2 },
    { id: 5, value: 19 },
  ]
  const result = find(a => a.value > 10, iterable)
  expect(result.id).toBe(2)
  expect(result).toEqual({ id: 2, value: 11 })

  const noResult = find(a => a.value > 20, iterable)
  expect(noResult).toBe(undefined)

  const curriedFind = find(a => a.value > 10)
  const curryResult = curriedFind(iterable)
  expect(curryResult.id).toBe(2)
  expect(curryResult).toEqual({ id: 2, value: 11 })
})
