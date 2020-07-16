import { reduce } from './reduce'

export const sum = arr => reduce((acc, current) => acc + current, arr)
