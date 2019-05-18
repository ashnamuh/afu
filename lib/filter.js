import curry from './curry'
import map from './map'

export default curry((f, iterable) => {
  const newIterable = []
  map(i => {
    if (f(i)) newIterable.push(i)
  }, iterable)
  return newIterable
})
