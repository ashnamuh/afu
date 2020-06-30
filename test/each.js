import test from 'ava'
import {
  each,
} from '../index'

test('each', t => {
  const iterable = ['a', 'b', 'c', 'd', 'e']
  let i = 0
  each(a => {
    t.true(a === iterable[i])
    i++
  }, iterable)

  i = 0

  const curriedEach = each(a => {
    t.true(a === iterable[i])
    i++
  })
  curriedEach(iterable)
})
