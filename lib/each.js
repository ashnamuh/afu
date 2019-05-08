export default (iterable, f) => {
  for (const i of iterable) {
    f(i)
  }
}
