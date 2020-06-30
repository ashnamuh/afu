import test from 'ava'
import {
  add,
} from '../index'

test('add', t => {
  t.is(add(4, 5), 9)

  const curriedAdd = add(10)
  t.is(curriedAdd(33), 43)
})
