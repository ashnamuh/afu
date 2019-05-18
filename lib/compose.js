import reduce from './reduce'

export default (...args) => reduce((acc, f) => f(acc), args)
