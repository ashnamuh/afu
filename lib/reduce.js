import curry from './curry'
import each from './each'

export default curry((...args) => {
  let [f, acc, iterable] = args // eslint-disable-line
  if (!iterable) {
    iterable = acc[Symbol.iterator]()
    acc = iterable.next().value
  }
  each(i => {
    acc = f(acc, i)
  }, iterable)
  return acc
})
