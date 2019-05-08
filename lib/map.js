import each from './each'

export default (iterable, f) => {
  const newIterable = []
  each(iterable, i => newIterable.push(f(i)))
  return newIterable
}
