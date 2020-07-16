
export const chunk = (iterable, size = 1) => {
  const chunkedArr = []
  const iterableArr = [...iterable]

  for (let i = 0; i < iterable.length; i += size) {
    const temp = iterableArr.slice(i, i + size)
    chunkedArr.push(temp)
  }

  return chunkedArr
}
