import {
  each,
} from '../afu'

describe('each', () => {
  it('should execute callback function in each item of array', () => {
    const iterable = ['a', 'b', 'c', 'd', 'e']
    let i = 0
    each((a, index) => {
      expect(a).toBe(iterable[i])
      expect(index).toBe(i)
      i++
    }, iterable)

    expect(i).toBe(5)
  })
  it('should execute callback function in each value of string', () => {
    const iterable = 'abc'
    let i = 0
    each((a, index) => {
      expect(a).toBe(iterable[i])
      expect(index).toBe(i)
      i++
    }, iterable)

    expect(i).toBe(3)
  })
})
