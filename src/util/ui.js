import React from 'react'

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export function isElement (o) {
  return (
    typeof HTMLElement === 'object'
      ? o instanceof HTMLElement
      : o && typeof o === 'object' &&
        o !== null && o.nodeType === 1 &&
        typeof o.nodeName === 'string'
  )
}

// Order of priority ->
//  1. props.themes.emotive[prop]
//  2. themes.emotive[prop]
export function mergeThemes (defaultTheme = {}, propsTheme = {}, prop) {
  return {
    ...defaultTheme[prop],
    ...propsTheme[prop],
  }
}

export function chainFns (...fns) {
  return (...params) => {
    if (!fns.length) return
    fns.forEach(fn => fn && fn(...params))
  }
}

export function mapValidElements (children, fn) {
  let i = -1
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child
    }
    i += 1
    return fn(child, i)
  })
}
