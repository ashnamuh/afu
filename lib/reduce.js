import each from './each'

export default (...args) => {
  let [iterable, f, acc] = args // eslint-disable-line
  if (!acc) {
    iterable = iterable[Symbol.iterator]()
    acc = iterable.next().value
  }
  each(iterable, i => {
    acc = f(acc, i)
  })
  return acc
}
