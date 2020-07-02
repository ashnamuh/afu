export default (start, end, step = 1) => {
  const last = end || start
  let i = (last !== start) ? start : 0
  const arr = []

  while (i < last) {
    arr.push(i)
    i += step
  }
  return arr
}
