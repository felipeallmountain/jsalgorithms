import { expect } from 'chai'
import {
  addUpToSumNaive,
  addUpToSumRefactor,
  sumZeroNaive,
  sumZeroRefactor,
  sameNaive,
  sameRefactor,
  countUniqueValues,
  gcdArr
} from '../src/udemyAlgorithms'

describe('Udemy js algorithms', () => {
  describe('sum all values for input naive', () => {
    it('should return 28', () =>  {
      expect(addUpToSumNaive(7)).to.equal(28)
    })
  })

  describe('summ all values for input refactor', () => {
    it('should return 28', () =>  {
      expect(addUpToSumRefactor(7)).to.equal(28)
    })
  })

  describe('multiple pointers naive', () => {
    it('should return [-2, 2] when sumZeroNaive([-2, -1, 0, 1, 2])', () => {
      expect(sumZeroNaive([-2, -1, 0, 1, 2])).to.deep.equal([-2, 2])
    })

    it('should return undefined if there are no pairs', () => {
      expect(sumZeroNaive([1, 2, 3])).to.equal(undefined)
    })
  })

  describe('multiple pointers refactor', () => {
    it('should return [-2, 2] when sumZeroNaive([-2, -1, 0, 1, 2])', () => {
      expect(sumZeroRefactor([-2, -1, 0, 1, 2])).to.deep.equal([-2, 2])
    })
    it('should return undefined if there are no pairs', () => {
      expect(sumZeroRefactor([1, 2, 3])).to.equal(undefined)
    })
  })

  describe('frequency counter naive', () => {
    it('should return true when sameNaive([3, 4, 5], [16, 25, 9])', () => {
      expect(sameNaive([3, 4, 5], [16, 25, 9])).to.equal(true)
    })
  })
  describe('frequency counter refactor', () => {
    it('should return true when sameNaive([3, 4, 5], [16, 25, 9])', () => {
      expect(sameRefactor([3, 4, 5], [16, 25, 9])).to.equal(true)
    })
  })

  describe('count unique values', () => {
    it('should return 2 when countUniqueValues([1, 1, 1, 2])', () => {
      expect(countUniqueValues([1, 1, 1, 2])).to.equal(2)
    })
    it('should return 3 when countUniqueValues([1, 1, 1, 2])', () => {
      expect(countUniqueValues([-1, 1, 1, 2])).to.equal(3)
    })
    it('should return 4 when countUniqueValues([1, 1, 1, 2])', () => {
      expect(countUniqueValues([-2, -2, -1, -1, 0, 1])).to.equal(4)
    })
  })

  describe('greater common divisor', () => {
    it('should return 5', () => {
      expect(gcdArr([25, 35, 75, 125])).to.equal(5)
    })
  })
})