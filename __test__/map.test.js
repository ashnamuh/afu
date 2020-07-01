import {
  map,
} from '../afu'

describe('map', () => {
  it('should create a new array populated with the results of calling a provided function', () => {
    const iterable = [1, 2, 3, 4, 5]
    const result = map(a => a * a, iterable)
    expect(result).toEqual([1, 4, 9, 16, 25])
  })
})
