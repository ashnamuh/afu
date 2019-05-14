import test from 'ava'
import {
  add, each, map, filter, reduce,
  compose, pipe,
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

test('reduce', t => {
  const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const resultWithInitValue = reduce(iterable, (acc, current) => acc + current, 10)
  t.is(resultWithInitValue, 65)

  const result = reduce(iterable, (acc, current) => acc + current)
  t.is(result, 55)
})

test('compose', t => {
  const iterable = [1, 2, 3, 4, 5]
  const result = compose(
    iterable,
    iter => map(iter, i => i * 2),
    iter => filter(iter, i => i <= 5),
  )

  t.deepEqual(result, [2, 4])
})

test('pipe', t => {
  const iterable = [2, 4, 6, 8, 10]
  const f = pipe(
    iter => map(iter, i => i * 2),
    iter => filter(iter, i => i > 10),
  )

  t.deepEqual(f(iterable), [12, 16, 20])
})
