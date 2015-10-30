'use strict'

import ListNode from './list-node'

let head = Symbol()
let tail = Symbol()
let size = Symbol()

class List {
  constructor() {
    this[head] = null
    this[tail] = null
    this[size] = 0
  }

  get size() {
    return this[size]
  }

  prepend(element) {
    let node = new ListNode(element)

    this[size] += 1

    if (this[head] === null) {
      this[head] = node
      return this
    }

    node.next = this[head]
    this[head].previous = node

    if (this[tail] === null) {
      this[tail] = this[head]
    }

    this[head] = node

    return this
  }

  append(element) {
    let node = new ListNode(element)

    this[size] += 1

    if (this[head] === null) {
      this[head] = node
      return this
    }

    if (this[tail] === null) {
      this[tail] = node
      this[tail].previous = this[head]
      this[head].next = this[tail]
      return this
    }

    this[tail].next = node
    node.previous = this[tail]
    this[tail] = node

    return this
  }

  first() {
    return this[head].element
  }

  last() {
    return this[tail].element
  }

  get(pos) {
    if (pos >= this[size]) {
      return
    }

    if (pos + 1 > this[size] / 2) {
      return this.getFromTail(pos)
    }

    return this.getFromHead(pos)
  }

  getFromHead(pos) {
    let cur = 0
    let node = this[head]

    while (cur < pos) {
      node = node.next
      cur++
    }

    return node.element
  }

  getFromTail(pos) {
    let cur = this[size] - 1
    let node = this[tail]

    while (cur > pos) {
      node = node.previous
      cur--
    }

    return node.element
  }

  forEach(fn) {
    let node = this[head]

    while (node !== null) {
      fn(node.element)
      node = node.next
    }
  }
}

export default List
