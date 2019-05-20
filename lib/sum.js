import reduce from './reduce'

export default (...args) => {
  let numbers = args
  if (args[0] instanceof Array) {
    numbers = args.flat()
  }
  return reduce((sum, number) => {
    if (!number || typeof number !== 'number') {
      return sum
    }
    return sum + number
  }, numbers)
}
