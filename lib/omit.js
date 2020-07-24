import { each } from './each'
import { includes } from './includes'

export const omit = (obj, properties) => {
  const result = {}
  const keys = Object.keys(obj)

  each(i => {
    if (!includes(i, properties)) {
      result[i] = obj[i]
    }
  }, keys)

  return result
}
