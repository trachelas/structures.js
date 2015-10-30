/* eslint-env mocha */
'use strict'

import ListNode from '../../src/list/list-node'
import {expect} from 'chai'

describe('ListNode', () => {
  let node

  beforeEach(() => {
    node = new ListNode('element')
  })

  describe('constructor', () => {
    it('should set node element', () => {
      expect(node.element).to.equal('element')
    })

    it('should set previous to null', () => {
      expect(node.previous).to.be.null
    })

    it('should set next to null', () => {
      expect(node.next).to.be.null
    })
  })
})
