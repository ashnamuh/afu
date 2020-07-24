import {
  pick,
} from '../afu'

describe('pick', () => {
  it('should create new object with picked properties', () => {
    const obj = { a: 1, b: 2, c: 3 }

    expect(pick(obj, ['a', 'b'])).toEqual({ a: 1, b: 2 })
    expect(obj).toEqual({ a: 1, b: 2, c: 3 })
  })
})
