export const has = (obj, property) => {
  const hasOwnProperty = Object.prototype.hasOwnProperty.bind(obj)

  return hasOwnProperty(property)
}
