import {
  add,
} from '../afu'

test('add', () => {
  expect(add(4, 5)).toBe(9)

  const curriedAdd = add(10)
  expect(curriedAdd(33)).toBe(43)
})
