function isObject (value) {
  return value !== null && typeof value === 'object'
}

function hasOwnProperty (target, key) {
  return Object.prototype.hasOwnProperty.call(target, key)
}

function isEqual (newValue, oldValue) {
  return newValue === oldValue
}

export {
  isObject,
  hasOwnProperty,
  isEqual
}