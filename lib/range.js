export default (start, end) => {
  const last = end || start
  let i = (last !== start) ? start : 0
  const arr = []

  while (i < last) {
    arr.push(i)
    i++
  }
  return arr
}
