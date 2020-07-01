import {
  sum,
} from '../afu'

describe('sum', () => {
  it('should sum number array', () => {
    expect(sum([1, 2, 3])).toBe(6)
  })
})
