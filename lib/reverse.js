import each from './each'

export default iterable => {
  const arr = [...iterable]
  const reversedArr = []
  let reversedIndex = arr.length - 1

  each(() => {
    reversedArr.push(arr[reversedIndex])
    reversedIndex--
  }, arr)

  if (typeof iterable === 'string') {
    return reversedArr.join('')
  }

  return reversedArr
}
