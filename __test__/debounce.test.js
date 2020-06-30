import {
  debounce,
} from '../afu'

test('debounce', () => {
  let callCount = 0

  const debounced = debounce(value => {
    ++callCount
    return value
  }, 32)

  const result1 = [debounced('a'), debounced('b'), debounced('c')]
  expect(result1).toEqual([undefined, undefined, undefined])
  expect(callCount).toBe(0)

  setTimeout(() => {
    expect(callCount).toBe(1)

    const result2 = [debounced('d'), debounced('e'), debounced('f')]
    expect(result2).toEqual(['c', 'c', 'c'])
    expect(callCount).toBe(1)
  }, 128)
})
