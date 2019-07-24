import test from 'ava'
import {
  add, each, map, filter, reduce,
  compose, pipe, curry, get,
  sum, find, range, debounce,
  includes,
} from '../index'

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

test('add', t => {
  t.is(add(4, 5), 9)

  const curriedAdd = add(10)
  t.is(curriedAdd(33), 43)
})

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

test('map', t => {
  const iterable = [1, 2, 3, 4, 5]
  const result = map(a => a * a, iterable)
  t.deepEqual(result, [1, 4, 9, 16, 25])

  const curriedMap = map(a => a + 1)
  const curryResult = curriedMap(iterable)
  t.deepEqual(curryResult, [2, 3, 4, 5, 6])
})

test('filter', t => {
  const iterable = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]
  const result = filter(a => a.id > 3, iterable)
  t.is(result.length, 2)
  t.deepEqual(result, [{ id: 4 }, { id: 5 }])

  const curriedFilter = filter(a => a.id < 2)
  const curryResult = curriedFilter(iterable)
  t.is(curryResult.length, 1)
  t.deepEqual(curryResult, [{ id: 1 }])
})

test('reduce', t => {
  const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const resultWithInitValue = reduce((acc, current) => acc + current, 10, iterable)
  t.is(resultWithInitValue, 65)

  const result = reduce((acc, current) => acc + current, iterable)
  t.is(result, 55)

  const curriedReduece = reduce((acc, current) => acc + current)
  const curryResult1 = curriedReduece(iterable)

  const curryResult2 = curriedReduece(10, iterable)
  t.is(curryResult1, 55)
  t.is(curryResult2, 65)
})

test('compose', t => {
  const iterable = [1, 2, 3, 4, 5]
  const result = compose(
    iterable,
    iter => map(i => i * 2, iter),
    iter => filter(i => i <= 5, iter),
  )

  t.deepEqual(result, [2, 4])
})

test('pipe', t => {
  const iterable = [2, 4, 6, 8, 10]
  const f = pipe(
    iter => map(i => i * 2, iter),
    iter => filter(i => i > 10, iter),
  )

  t.deepEqual(f(iterable), [12, 16, 20])
})

test('curry', t => {
  const curriedAdd = curry(add)
  const add10 = curriedAdd(10)
  const curriedAdd2 = curry((a, b, c, d) => a + b + c + d)

  t.is(add10(5), 15)
  t.is(curriedAdd(3, 9), 12)
  t.is(curriedAdd2(1)(2)(3)(4), 10)
  t.is(curriedAdd2(1, 3, 5, 9), 18)

  const curriedMap = curry(map)
  const curriedFilter = curry(filter)
  const curriedReduce = curry(reduce)

  const f = pipe(
    curriedMap(i => i * 2),
    curriedFilter(i => i < 10),
    curriedReduce((a, b) => a + b),
  )
  t.is(f([1, 2, 3, 4, 5]), 20)
})

test('get', t => {
  const obj = { a: 'vall' }
  t.is(get('a', obj), 'vall')
})

test('sum', t => {
  const arr = [1, 2, 3, 4, 5, NaN, null, 'string']
  t.is(sum(arr), 15)

  t.is(sum(1, 2, 3), 6)
})

test('find', t => {
  const iterable = [
    { id: 1, value: 6 },
    { id: 2, value: 11 },
    { id: 3, value: 13 },
    { id: 4, value: 2 },
    { id: 5, value: 19 },
  ]
  const result = find(a => a.value > 10, iterable)
  t.is(result.id, 2)
  t.deepEqual(result, { id: 2, value: 11 })

  const noResult = find(a => a.value > 20, iterable)
  t.is(noResult, undefined)

  const curriedFind = find(a => a.value > 10)
  const curryResult = curriedFind(iterable)
  t.is(curryResult.id, 2)
  t.deepEqual(curryResult, { id: 2, value: 11 })
})

test('range', t => {
  const arr1 = range(5)
  t.deepEqual(arr1, [0, 1, 2, 3, 4])

  const arr2 = range(5, 10)
  t.deepEqual(arr2, [5, 6, 7, 8, 9])
})

test('debounce', t => {
  let callCount = 0

  const debounced = debounce(value => {
    ++callCount
    return value
  }, 32)

  const result1 = [debounced('a'), debounced('b'), debounced('c')]
  t.deepEqual(result1, [undefined, undefined, undefined])
  t.is(callCount, 0)

  setTimeout(() => {
    t.is(callCount, 1)

    const result2 = [debounced('d'), debounced('e'), debounced('f')]
    t.deepEqual(result2, ['c', 'c', 'c'])
    t.is(callCount, 1)
  }, 128)
})

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
