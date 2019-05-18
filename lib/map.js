import curry from './curry'
import each from './each'

export default curry((f, iterable) => {
  const newIterable = []
  each(i => newIterable.push(f(i)), iterable)
  return newIterable
})
