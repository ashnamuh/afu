import curry from './curry'

export default curry((f, iterable) => {
  let result
  for (const i of iterable) {
    if (f(i)) {
      result = i
      break
    }
  }
  return result
})
