import reduce from './reduce'

export default arr => reduce((acc, current) => acc + current, arr)
