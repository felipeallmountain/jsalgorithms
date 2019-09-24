import { expect } from 'chai'
import {
  addUpToSumNaive,
  addUpToSumRefactor,
  sumZeroNaive,
  sumZeroRefactor,
  sameNaive,
  sameRefactor,
  countUniqueValues,
  gcdArr,
  maxSubarrayNumNaive,
  maxSubarrayNumRefactor,
  searchVal,
  createList,
  areThereDuplicatesFc,
  areThereDuplicatesSet
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
    it('should return 3 when countUniqueValues([-1, 1, 1, 2])', () => {
      expect(countUniqueValues([-1, 1, 1, 2])).to.equal(3)
    })
    it('should return 4 when countUniqueValues([-2, -2, -1, -1, 0, 1])', () => {
      expect(countUniqueValues([-2, -2, -1, -1, 0, 1])).to.equal(4)
    })
  })

  describe('greater common divisor', () => {
    it('should return 5', () => {
      expect(gcdArr([25, 35, 75, 125])).to.equal(5)
    })
  })

  describe('max subarray naive', () => {
    it('should return 9 when maxSubarrayNumNaive([1, 2, 3, 4, 5], 2)', () => {
      expect(maxSubarrayNumNaive([1, 2, 3, 4, 5], 2)).to.equal(9)
    })
  })
  describe('max subarray refactor', () => {
    it('should return 9 when maxSubarrayNumRefactor([1, 2, 3, 4, 5], 2)', () => {
      expect(
        maxSubarrayNumRefactor([1, 3, 5, 6, 7, 3, 4, 6, 7, 7, 8, 3, 4, 7, 8, 7, 1, 1, 3, 4, 6, 7], 4)
      ).to.equal(28)
    })
  })

  describe('divide and conquer search', () => {
    it('should return 567 when (createList(1000, 300), 568)', () => {
      expect(
        searchVal(createList(1000, 300), 568)
      ).to.equal(268)
    })
    it('should return 20 when (createList(100), 21)', () => {
      expect(
        searchVal(createList(100), 21)
      ).to.equal(20)
    })
    it('should return 6384 when (createList(1000000), 6385)', () => {
      expect(
        searchVal(createList(1000000), 6385)
      ).to.equal(6384)
    })
  })

  describe('Are there duplicates Frequency Counter', () => {
    it('should return true when args are (1, 2, 3, 3, 3)', () => {
      expect(areThereDuplicatesFc(1, 2, 3, 3, 3)).to.equal(true)
    })

    it('should return false when args are none', () => {
      expect(areThereDuplicatesFc()).to.equal(false)
    })
    it('should return false when args are (1, 2, 3)', () => {
      expect(areThereDuplicatesFc(1, 2, 3)).to.equal(false)
    })
  })

  describe('Are there duplicates Set solution', () => {
    it('should return true when args are (1, 2, 3, 3, 3, 3)', () => {
      expect(areThereDuplicatesSet(1, 2, 3, 3, 3, 3)).to.equal(true)
    })
    it('should return false when args are (1, 2, 3)', () => {
      expect(areThereDuplicatesSet(1, 2, 3)).to.equal(false)
    })
    it('should return false when args are none', () => {
      expect(areThereDuplicatesSet()).to.equal(false)
    })
  })
})