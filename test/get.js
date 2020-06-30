import test from 'ava'
import {
  get,
} from '../index'

test('get', t => {
  const obj = { a: 'vall' }
  t.is(get('a', obj), 'vall')
})
