import { isObject } from '../shared/utils'
import { mutableHandler } from './mutableHandler'

function reactive (target) {
  return createReactiveObject(target, mutableHandler)
}

function createReactiveObject (target, baseHandler) {
  // 只有对象需要才需要代理
  if (!isObject(target)) {
    return target
  }

  const observer = new Proxy(target, baseHandler)

  return observer
}

export {
  reactive
}