import map from './map'

export default (iterable, f) => {
  const newIterable = []
  map(iterable, i => {
    if (f(i)) newIterable.push(i)
  })
  return newIterable
}
