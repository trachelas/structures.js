'use strict'

class List {
  constructor() {
    this.head = null
    this.tail = null
  }

  first() {
    return this.head
  }

  last() {
    if (this.tail === null) {
      return this.head
    }

    return this.tail.last()
  }

  size() {
    if (this.head === null) {
      return 0
    }

    if (this.tail === null) {
      return 1
    }

    return 1 + this.tail.size()
  }

  isEmpty() {
    return this.size() === 0
  }

  prepend(...els) {
    els.forEach((el) => {
      if (this.head === null) {
        this.head = el
      } else {
        if (this.tail === null) {
          this.tail = new List()
        }

        this.tail.prepend(this.head)
        this.head = el
      }
    })

    return this
  }

  append(...els) {
    els.forEach((el) => {
      if (this.head === null) {
        this.head = el
      } else {
        if (this.tail === null) {
          this.tail = new List()
        }

        this.tail.append(el)
      }
    })

    return this
  }

  get(index) {
    if (typeof index !== 'number' || isNaN(index) || index < 0 || index % 1 !== 0) {
      throw new Error('Expected to receive positive integer as argument')
    }

    if (index === 0) {
      return this.head
    }

    return this.tail.get(index - 1)
  }
}

export default List
