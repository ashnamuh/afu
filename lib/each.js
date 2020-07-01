export default (f, iterable) => {
  let index = 0
  for (const i of iterable) {
    f(i, index)
    index++
  }
}
