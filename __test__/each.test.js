import {
  each,
} from '../afu'

test('each', () => {
  const iterable = ['a', 'b', 'c', 'd', 'e']
  let i = 0
  each(a => {
    expect(a === iterable[i]).toBe(true)
    i++
  }, iterable)

  i = 0

  const curriedEach = each(a => {
    expect(a === iterable[i]).toBe(true)
    i++
  })
  curriedEach(iterable)
})
