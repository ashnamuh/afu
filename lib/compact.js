import each from './each'

export default arr => {
  const compactedArr = []
  each(i => {
    if (i) {
      compactedArr.push(i)
    }
  }, arr)

  return compactedArr
}
