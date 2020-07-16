export const debounce = (fn, time) => {
  let timeout

  return function () { // eslint-disable-line
    const functionCall = () => fn.apply(this, arguments) // eslint-disable-line

    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}
