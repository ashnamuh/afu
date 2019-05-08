import test from 'ava'
import {
  add, each, map, filter,
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

test('filter', t => {
  const iterable = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]
  const result = filter(iterable, a => a.id > 3)
  t.is(result.length, 2)
  t.deepEqual(result, [{ id: 4 }, { id: 5 }])
})
