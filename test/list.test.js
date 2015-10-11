/* eslint-env mocha */
'use strict'

import List from '../src/list'
import {expect} from 'chai'

describe('List', () => {
  let list

  beforeEach(() => {
    list = new List()
  })

  it('should start empty', () => {
    expect(list.isEmpty()).to.be.true
    expect(list.size()).to.equal(0)
  })

  it('should start with head and tail equal to null', () => {
    expect(list.head).to.be.null
    expect(list.tail).to.be.null
  })

  describe('first', () => {
    it('should return first element of the list', () => {
      list.append(1, 2)
      expect(list.first()).to.equal(1)
    })
  })

  describe('last', () => {
    it('should return last element of the list', () => {
      list.append(1, 2)
      expect(list.last()).to.equal(2)
    })
  })

  describe('size', () => {
    it('should return the list\'s size', () => {
      expect(list.size()).to.equal(0)
      list.append(1)
      expect(list.size()).to.equal(1)
      list.append(2)
      expect(list.size()).to.equal(2)
      list.append(3)
      expect(list.size()).to.equal(3)
    })
  })

  describe('isEmpty', () => {
    it('should return true if list is empty', () => {
      expect(list.isEmpty()).to.be.true
    })

    it('should return false if list isn\'t empty', () => {
      list.append(1)
      expect(list.isEmpty()).to.be.false
    })
  })

  describe('prepend', () => {
    it('should return itself', () => {
      expect(list.prepend(1)).to.equal(list)
    })

    it('should allow multiple params', () => {
      list.prepend(1, 2, 3, 4, 5)
      expect(list.size()).to.equal(5)
    })

    it('should put element in first position of list', () => {
      list.prepend(1, 2, 3)
      expect(list.first()).to.equal(3)
    })
  })

  describe('append', () => {
    it('should return itself', () => {
      expect(list.append(1)).to.equal(list)
    })

    it('should allow multiple params', () => {
      list.append(1, 2, 3, 4, 5)
      expect(list.size()).to.equal(5)
    })

    it('should put element in last position of list', () => {
      list.append(1, 2, 3)
      expect(list.last()).to.equal(3)
    })
  })

  describe('get', () => {
    it('should throw error if index is undefined', () => {
      let caller = function() {
        list.get()
      }

      expect(caller).to.throw(Error)
    })

    it('should throw error if index is negative', () => {
      let caller = function() {
        list.get(-1)
      }

      expect(caller).to.throw(Error)
    })

    it('should throw error if index is not integer', () => {
      let caller = function() {
        list.get(1.1)
      }

      expect(caller).to.throw(Error)
    })

    it('should throw error if index is string', () => {
      let caller = function() {
        list.get('i\'m a string')
      }

      expect(caller).to.throw(Error)
    })

    it('should throw error if index is NaN', () => {
      let caller = function() {
        list.get(NaN)
      }

      expect(caller).to.throw(Error)
    })

    it('should throw error if index is object', () => {
      let caller = function() {
        list.get({})
      }

      expect(caller).to.throw(Error)
    })

    it('should throw error if index is array', () => {
      let caller = function() {
        list.get([])
      }

      expect(caller).to.throw(Error)
    })

    it('should throw error if index is boolean', () => {
      let arg
      let caller = function() {
        list.get(arg)
      }

      arg = true
      expect(caller).to.throw(Error)
      arg = false
      expect(caller).to.throw(Error)
    })

    it('should throw error if index is function', () => {
      let caller = function() {
        list.get(function() {
        })
      }

      expect(caller).to.throw(Error)
    })

    it('should return the correct element', () => {
      list.append(1, 2, 3, 4)
      expect(list.get(0)).to.equal(1)
      expect(list.get(1)).to.equal(2)
      expect(list.get(2)).to.equal(3)
      expect(list.get(3)).to.equal(4)
    })
  })
})
