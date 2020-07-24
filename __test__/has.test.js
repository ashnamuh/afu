import {
  has,
} from '../afu'

describe('has', () => {
  it('should return true, if the object has given property', () => {
    expect(has({ a: 1 }, 'a')).toBe(true)
  })

  it('should return false, if the object do not have given property', () => {
    expect(has({ a: 1 }, 'b')).toBe(false)
  })

  it('should return false, if the object has given property as prototype', () => {
    function Person() {
      this.ownProperty = 1
    }

    Person.prototype.prototypeProperty = 1

    const obj = new Person()

    expect(has(obj, 'ownProperty')).toBe(true)
    expect(has(obj, 'prototypeProperty')).toBe(false)
  })
})
