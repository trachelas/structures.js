/* eslint-env mocha */
'use strict'

import List from '../../src/list/list'
import {expect} from 'chai'
import sinon from 'sinon'

describe('List', () => {
  let list

  beforeEach(() => {
    list = new List()
  })

  describe('head', () => {
    it('should be inaccessible', () => {
      expect(list.head).to.be.undefined
    })
  })

  describe('tail', () => {
    it('should be inaccessible', () => {
      expect(list.tail).to.be.undefined
    })
  })

  it('should start empty', () => {
    expect(list.size).to.equal(0)
  })

  describe('prepend', () => {
    it('should return itself', () => {
      expect(list.prepend(1)).to.equal(list)
    })

    it('should put element in first position of list', () => {
      list.prepend(1).prepend(2).prepend(3)
      expect(list.first()).to.equal(3)
    })

    it('should update size', () => {
      list.prepend(1).prepend(2).prepend(3)
      expect(list.size).to.equal(3)
    })
  })

  describe('append', () => {
    it('should return itself', () => {
      expect(list.append(1)).to.equal(list)
    })

    it('should put element in last position of list', () => {
      list.append(1).append(2).append(3)
      expect(list.last()).to.equal(3)
    })

    it('should update size', () => {
      list.append(1).append(2).append(3)
      expect(list.size).to.equal(3)
    })
  })

  describe('first', () => {
    it('should return first element of the list', () => {
      list.append(1).append(2)
      expect(list.first()).to.equal(1)
    })
  })

  describe('last', () => {
    it('should return last element of the list', () => {
      list.append(1).append(2)
      expect(list.last()).to.equal(2)
    })
  })

  describe('get', () => {
    beforeEach(() => {
      sinon.stub(list, 'getFromHead').returns('head')
      sinon.stub(list, 'getFromTail').returns('tail')
    })

    afterEach(() => {
      list.getFromHead.restore()
      list.getFromTail.restore()
    })

    it('should return undefined if pos is out of bounds', () => {
      list.append(1).append(2)
      expect(list.get(2)).to.undefined
    })

    it('should call getFromTail if pos is > middle', () => {
      list.append(1).append(2).append(3).append(4)
      list.get(2)
      sinon.assert.calledWith(list.getFromTail, 2)
    })

    it('should call getFromHead if pos is <= middle', () => {
      list.append(1).append(2).append(3).append(4)
      list.get(1)
      sinon.assert.calledWith(list.getFromHead, 1)
    })
  })

  describe('getFromHead', () => {
    it('should return the correct element', () => {
      list.append(1).append(2).append(3).append(4)
      expect(list.getFromHead(2)).to.equal(3)
    })
  })

  describe('getFromTail', () => {
    it('should return the correct element', () => {
      list.append(1).append(2).append(3).append(4)
      expect(list.getFromTail(2)).to.equal(3)
    })
  })

  describe('forEach', () => {
    it('should call provided function once for every node in list', () => {
      let fn = sinon.spy()

      list.append(1).append(2).append(3).append(4)
      list.forEach(fn)
      expect(fn.callCount).to.equal(4)
      sinon.assert.calledWith(fn.getCall(0), 1)
      sinon.assert.calledWith(fn.getCall(1), 2)
      sinon.assert.calledWith(fn.getCall(2), 3)
      sinon.assert.calledWith(fn.getCall(3), 4)
    })
  })
})
