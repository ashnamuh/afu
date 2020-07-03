import {
  reverse,
} from '../afu'

describe('reverse', () => {
  it('should create a new reversed array with an array', () => {
    expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
  })

  it('should create a new reversed array with a string ', () => {
    expect(reverse('abcde')).toBe('edcba')
  })
})
