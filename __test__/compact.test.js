import {
  compact,
} from '../afu'

describe('compact', () => {
  it('should create an array with all falsey values removed', () => {
    expect(compact([0, 1, false, 2, '', 3, NaN])).toEqual([1, 2, 3])
  })
})
