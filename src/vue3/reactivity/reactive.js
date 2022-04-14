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

  // 如果已被代理
  if (target.__ob__) {
    return target.__ob__
  }

  // console.log('-------------start------------------')
  // console.log(target)
  // console.log('-------------end-------------------')

  const observer = new Proxy(target, baseHandler)

  target.__ob__ = observer

  return observer
}

export {
  reactive
}