import { each } from './each'

export const map = (f, iterable) => {
  const newIterable = []
  each((i, index) => newIterable.push(f(i, index)), iterable)
  return newIterable
}
