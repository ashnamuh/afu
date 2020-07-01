import {
  each,
} from '../afu'

describe('each', () => {
  it('should execute callback function in each item', () => {
    const iterable = ['a', 'b', 'c', 'd', 'e']
    let i = 0
    each(a => {
      expect(a === iterable[i]).toBe(true)
      i++
    }, iterable)

    expect(i).toBe(5)
  })
})
