import {
  omit,
} from '../afu'

describe('omit', () => {
  it('should create new object with omitted properties', () => {
    const obj = { a: 1, b: 2, c: 3 }

    expect(omit(obj, ['a', 'b'])).toEqual({ c: 3 })
    expect(obj).toEqual({ a: 1, b: 2, c: 3 })
  })
})
