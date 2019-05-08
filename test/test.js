import test from 'ava'
import {
  add, each, map,
} from '../index'

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

test('add', t => t.is(add(4, 5), 9))

test('each', t => {
  const iterable = ['a', 'b', 'c', 'd', 'e']
  let i = 0
  each(iterable, a => {
    t.true(a === iterable[i])
    i++
  })
})

test('map', t => {
  const iterable = [1, 2, 3, 4, 5]
  const result = map(iterable, a => a * a)
  t.deepEqual(result, [1, 4, 9, 16, 25])
})
