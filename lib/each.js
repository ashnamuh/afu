import curry from './curry'

export default curry((f, iterable) => {
  for (const i of iterable) {
    f(i)
  }
})
