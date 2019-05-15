import map from './map'

export default (f, iterable) => {
  const newIterable = []
  map(i => {
    if (f(i)) newIterable.push(i)
  }, iterable)
  return newIterable
}
