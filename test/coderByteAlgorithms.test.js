import { expect } from 'chai'
import { DataNode, findMiddleNode, generatePrimes } from '../src/coderByteAlgorithms';

describe('Coder Byte Algorithms', () => {
  describe('Find the middle element of a linked list', () => {
    it('should return "three"', () => {
      const node1 = DataNode('one', null)
      const node2 = DataNode('two', node1)
      const node3 = DataNode('three', node2)
      const node4 = DataNode('four', node3)

      expect(
        findMiddleNode(node4)
      ).to.equal('three')
    })

    it('should return "five"', () => {
      const node1 = DataNode('one', null)
      const node2 = DataNode('two', node1)
      const node3 = DataNode('three', node2)
      const node4 = DataNode('four', node3)
      const node5 = DataNode('five', node4)
      const node6 = DataNode('six', node5)
      const node7 = DataNode('seven', node6)
      const node8 = DataNode('eight', node7)
      const node9 = DataNode('nine', node8)
      expect(
        findMiddleNode(node9)
      ).to.equal('five')
    })
  })

  describe('generate prime numbers list', () => {
    it('should return "2,3,5,7"', () => {
      expect(
        generatePrimes(7)
      ).to.equal('2,3,5,7')
    })

    it('should return "2,3,5,7,11,13,17"', () => {
      expect(
        generatePrimes(18)
      ).to.equal('2,3,5,7,11,13,17')
    })
  })
})