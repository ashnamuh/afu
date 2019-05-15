export default f => (...args) => {
  if (args.length === 1) {
    return function recur(...b) {
      if (!f(...args, ...b)) {
        return c => recur(...b, c)
      }
      return f(...args, ...b)
    }
  }
  return f(...args)
}
