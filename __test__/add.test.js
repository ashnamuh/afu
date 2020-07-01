import {
  add,
} from '../afu'

describe('add', () => {
  it('should add numbers', () => {
    expect(add(4, 5)).toBe(9)
  })
  it('should add string', () => {
    expect(add('he', 'llo')).toBe('hello')
  })
})
