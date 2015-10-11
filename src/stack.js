'use strict'

let stack = Symbol()

class Stack {
  constructor() {
    this[stack] = []
  }

  push(el) {
    this[stack].push(el)
    return this
  }

  pop() {
    return this[stack].pop()
  }

  get length() {
    return this[stack].length
  }
}

module.exports = Stack
