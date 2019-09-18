import { expect } from 'chai'
import { 
  palindrome, fizzBuzz, anagram, findVowelsNum, fibonacci, findNumber, sum,
  selectionSort, quickSort, linearSearch
} from '../src/eggheadAlgorithms';

describe('egghead algorithms', () => {

  describe('palindrome', () => {
    it ('should return true when "anna" is input', () => {
      expect(palindrome('anna')).to.be.true
    })
    it ('should return false when "louise" is input', () => {
      expect(palindrome('louise')).to.be.false
    })
  })

  describe('fizzBuzz', () => {
    it (
      `should return 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 15, fizzBuzz`,
      () => {
        expect(fizzBuzz(15)).to.deep.equal(
          [
            1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
            'buzz', 11, 'fizz', 13, 14, 'fizzBuzz'
          ]
        )
      }
    )
  })

  describe('anagram', () => {
    it ('should return true', () => {
      expect(anagram('finder', 'Friend')).to.be.true
    })
    it ('should return false', () => {
      expect(anagram('papa', 'amma')).to.be.false
    })
  })

  describe('findVowelsNum', () => {
    it ('should return 2', () => {
      expect(findVowelsNum('mama')).to.equal(2)
    })
    it ('should return 6', () => {
      expect(findVowelsNum('mamapapameme')).to.equal(6)
    })
  })

  describe('fibonacci', () => {
    it ('should return 3', () => {
      expect(fibonacci(4)).to.equal(3)
    })

    it ('should return 55', () => {
      expect(fibonacci(10)).to.equal(55)
    })

    it ('should return 832040', () => {
      expect(fibonacci(30)).to.equal(832040)
    })
  })

  describe('findNumber', () => {
    it ('should return true', () => {
      expect(
        findNumber([[2, 3, 5], [5, 6, 7]], 5)
      ).to.be.true
    })

    it ('should return false', () => {
      expect(
        findNumber([[2, 3, 5], [5, 6, 7]], 1)
      ).to.be.false
    })

    it ('should return true', () => {
      expect(
        findNumber([[2, 3], [5, 6, 7], 1], 1)
      ).to.be.true
    })

    it ('should return true', () => {
      expect(
        findNumber([[2, 3], [5, 6, 7], [[[[[[[1]]]]]]]], 1)
      ).to.be.true
    })
  })

  describe('sum', () => {
    it ('should return 15', () => {
      expect(
        sum([1, 2, 3, 4, 5])
      ).to.equal(15)
    })

    it ('should return 255', () => {
      expect(
        sum([25, 31, 37, 38, 61])
      ).to.equal(192)
    })
  })

  describe('selectionSort', () => {
    it ('should return [3, 2, 1]', () => {
      expect(
        selectionSort([3, 1, 2])
      ).to.deep.equal([3, 2, 1])
    })

    it ('should return [5, 4, 3, 2]', () => {
      expect(
        selectionSort([2, 3, 5, 4])
      ).to.deep.equal([5, 4, 3, 2])
    })
  })

  describe('quickSort', () => {
    it ('should return [1, 2, 3, 4, 5, 6]', () => {
      expect(
        quickSort([4, 3, 1, 2, 6, 5])
      ).to.deep.equal([1, 2, 3, 4, 5, 6])
    })

    it ('should return [3, 4, 5, 6, 7, 8, 8, 9, 10]', () => {
      expect(
        quickSort([10, 3, 9, 4, 8, 5, 8, 6, 7])
      ).to.deep.equal([3, 4, 5, 6, 7, 8, 8, 9, 10])
    })
  })

  describe('linearSearch', () => {
    it ('should return true', () => {
      expect(
        linearSearch(quickSort([2, 4, 6, 7, 9, 20, 40, 30, 45, 23, 30]), 2)
      ).to.be.true
    })
  })
})
