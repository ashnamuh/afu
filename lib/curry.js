export const curry = f => (...args) => {
  if (args.length === 1) {
    return function recur(...secondArgs) {
      if (!f(...args, ...secondArgs)) {
        return thirdArgs => recur(...secondArgs, thirdArgs)
      }
      return f(...args, ...secondArgs)
    }
  }
  return f(...args)
}
