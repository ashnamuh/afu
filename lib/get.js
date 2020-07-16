import { curry } from './curry'

export const get = curry((key, obj) => obj[key])
