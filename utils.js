export const isObject = x => {
  return typeof x === 'object' && x !== null
}

// 设置 style
export const setEleStyle = (ele, obj) => {
  if (isObject(obj)) {
    try {
      Object.keys(obj).forEach(item => {
        const isStyle = ele.style.hasOwnProperty(item)
        if (isStyle) {
          const val = obj[item]
          ele.style[item] = val
        }
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}