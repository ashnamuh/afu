import {
  range,
} from '../afu'

describe('range', () => {
  it('should create an array of numbers progressing from 0 to given number', () => {
    const arr = range(5)
    expect(arr).toEqual([0, 1, 2, 3, 4])
  })

  it('should work with a specific end number', () => {
    const arr = range(5, 10)
    expect(arr).toEqual([5, 6, 7, 8, 9])
  })

  it('should work with a specific step number', () => {
    const arr = range(0, 11, 2)
    expect(arr).toEqual([0, 2, 4, 6, 8, 10])
  })
})
