import { each } from './each'

export const compact = arr => {
  const compactedArr = []
  each(i => {
    if (i) {
      compactedArr.push(i)
    }
  }, arr)

  return compactedArr
}
