import reduce from './reduce'

export default (...args) => reduce(args, (acc, f) => f(acc))
