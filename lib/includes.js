import curry from './curry'

export default curry((value, collection) => {
  let includes = false
  const isObjectValue = typeof value === 'object'

  for (const i of collection) {
    const isObjectItem = typeof i === 'object'

    if (!isObjectValue && i === value) {
      includes = true
      break
    }
    if (isObjectValue && isObjectItem && JSON.stringify(value) === JSON.stringify(i)) {
      includes = true
      break
    }
  }
  return includes
})
