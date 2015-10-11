/* eslint-env mocha */
'use strict'

import Stack from '../src/stack'
import {expect} from 'chai'

describe('stack', () => {
  it('should maintain internal array private', () => {
    let stack = new Stack()

    expect(stack.stack).to.be.undefined
  })

  describe('length', () => {
    it('should have the stack\'s length', () => {
      let stack = new Stack()

      expect(stack.length).to.equal(0)
      stack.push(1)
      expect(stack.length).to.equal(1)
      stack.pop()
      expect(stack.length).to.equal(0)
    })
  })

  describe('push', () => {
    it('should return itself', () => {
      let stack = new Stack()

      expect(stack.push(1)).to.equal(stack)
    })

    it('should increase the stack\'s length', () => {
      let stack = new Stack()
      let prevLength = stack.length

      stack.push(1)
      expect(stack.length).to.equal(prevLength + 1)
    })
  })

  describe('pop', () => {
    it('should return last pushted element', () => {
      let stack = new Stack()

      stack.push(0).push(1)
      expect(stack.pop()).to.equal(1)
    })

    it('should decrease the stack\'s length', () => {
      let stack = new Stack()

      stack.push(1)
      let prevLength = stack.length
      stack.pop()
      expect(stack.length).to.equal(prevLength - 1)
    })

    it('should return undefined if stack is empty', () => {
      let stack = new Stack()

      expect(stack.pop()).to.be.undefined
    })
  })
})
