import compose from './compose'

export default (f, ...fs) => iterable => compose(f(iterable), ...fs)
