export default (f, iterable) => {
  for (const i of iterable) {
    f(i)
  }
}
