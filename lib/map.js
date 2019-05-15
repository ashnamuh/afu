import each from './each'

export default (f, iterable) => {
  const newIterable = []
  each(i => newIterable.push(f(i)), iterable)
  return newIterable
}
