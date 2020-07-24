import { each } from './each'

export const pick = (obj, properties) => {
  const result = {}

  each(i => {
    result[i] = obj[i]
  }, properties)

  return result
}
