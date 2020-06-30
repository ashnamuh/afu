import test from 'ava'
import {
  includes,
} from '../index'

test('includes', t => {
  const arr = [11, 22, 33, 44, 55]
  t.true(includes(11, arr))
  t.false(includes(345, arr))

  const collection = [{ a: 1 }, { b: 3 }, { c: 3 }, { d: 4 }]
  t.true(includes({ a: 1 }, collection))
  t.false(includes({ e: 5 }, collection))
  t.false(includes('string', collection))

  const entris = [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
  t.true(includes(['b', 2], entris))
  t.false(includes(['f', 6], entris))
  t.false(includes('string', entris))

  const curriedIncludes = includes(33)
  t.true(curriedIncludes(arr))
})
