import { compose } from './compose'

export const pipe = (f, ...fs) => iterable => compose(f(iterable), ...fs)
