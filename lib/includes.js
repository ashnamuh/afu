import { curry } from './curry'

export const includes = curry((value, collection) => {
  let isIncluded = false
  const isObjectValue = typeof value === 'object'

  for (const i of collection) {
    const isObjectItem = typeof i === 'object'

    if (!isObjectValue && i === value) {
      isIncluded = true
      break
    }
    if (isObjectValue && isObjectItem && JSON.stringify(value) === JSON.stringify(i)) {
      isIncluded = true
      break
    }
  }
  return isIncluded
})
