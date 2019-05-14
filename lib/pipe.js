import pipe from './compose'

export default (f, ...fs) => iterable => pipe(f(iterable), ...fs)
