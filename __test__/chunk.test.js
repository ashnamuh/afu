import {
  chunk,
} from '../afu'

describe('chunk', () => {
  it('should chunk an array', () => {
    expect(chunk([1, 1, 1, 1, 1, 1, 1, 1], 2)).toEqual([[1, 1], [1, 1], [1, 1], [1, 1]])
    expect(chunk([1, 1, 1, 1, 1, 1, 'rest'], 2)).toEqual([[1, 1], [1, 1], [1, 1], ['rest']])
  })

  it('should chunk a string', () => {
    expect(chunk('aabbccdd', 2)).toEqual([['a', 'a'], ['b', 'b'], ['c', 'c'], ['d', 'd']])
    expect(chunk('aabbccr', 2)).toEqual([['a', 'a'], ['b', 'b'], ['c', 'c'], ['r']])
  })

  it('should throw an TypeError with non-iterable', () => {
    const t = () => {
      chunk({
        a: 1, b: 2, c: 3, d: 4,
      }, 2)
    }
    expect(t).toThrow(TypeError)
  })
})
