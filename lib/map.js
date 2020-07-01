import each from './each'

export default (f, iterable) => {
  const newIterable = []
  each((i, index) => newIterable.push(f(i, index)), iterable)
  return newIterable
}
