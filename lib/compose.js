import { reduce } from './reduce'

export const compose = (...args) => reduce((acc, f) => f(acc), args)
