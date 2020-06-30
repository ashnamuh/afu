import {
  get,
} from '../afu'

test('get', () => {
  const obj = { a: 'vall' }
  expect(get('a', obj)).toBe('vall')
})
