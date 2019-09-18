// PALINDROME
const palindrome = str => {
  return str === str.toLowerCase().split('').reverse().join('')
}

// FIZZBUZZ
const fizzBuzz = num => {
  let list = []
  const isMultiplier = (input, mult) => input % mult === 0

  for(let i = 0; i < num; i++) {
    const numPlus1 = i + 1;
    const is3Multiplier = isMultiplier(numPlus1, 3)
    const is5Multiplier = isMultiplier(numPlus1, 5)

    list[i] = is3Multiplier && is5Multiplier 
      ? 'fizzBuzz' : is3Multiplier 
      ? 'fizz' : is5Multiplier 
      ? 'buzz' : numPlus1
  }

  return list
}

// ANAGRAM
const anagram = (word1, word2) => {
  const sortWord = word => word.toLowerCase().split('').sort().join('')
  return sortWord(word1) === sortWord(word2)
}

// FINDVOWELS
const findVowelsNum = str => {
  const matched = str.match(/[aeiou]/gi)
  return matched ? matched.length : 0
}

// FIBONACCI
const fibonacci = (num) => {
  return num < 2
    ? num
    : fibonacci(num - 1) + fibonacci(num - 2)
}

// RECURSION (find number in matrix)
const findNumber = (list, num) => {
  let hasNumber = false

  list.forEach(elem => {
    if (hasNumber) {
      return
    }
    hasNumber = Array.isArray(elem)
      ? findNumber(elem, num)
      : elem === num
  })

  return hasNumber
}

// DIVIDE AND CONQUER (sum all items in array)
const sum = (list) => {
  return list.length === 0 ? 0 : list[0] + sum(list.slice(1))
}

// SORT
const findLargestValue = list => {
  let lrg = list[0]
  let indexOfLarge = 0
  for (let i = 1; i < list.length; i++) {
    if (lrg < list[i]) {
      lrg = list[i]
      indexOfLarge = i
    }
  }
  return indexOfLarge
}

const selectionSort = list => {
  let newList = []
  let lrgItem
  while (list.length) {
    lrgItem = findLargestValue(list)
    newList.push(list[lrgItem])
    list.splice(lrgItem, 1)
  }
  return newList
}

// QUICK SORT
const quickSort = list => {
  if (list.length < 2) return list
  const pivotIndex = Math.floor(list.length / 2)
  const pivot = list[pivotIndex]
  let less = []
  let greater = []

  for (let i = 0; i < list.length; i++) {
    if (i !== pivotIndex) {
      list[i] > pivot ? greater.push(list[i]) : less.push(list[i])
    }
  }

  return [
    ...quickSort(less),
    pivot,
    ...quickSort(greater)
  ]
}

// LINEAR SEARCH
// linearSearch([1, 2, 3, 4, 5], 4) ---> true
const linearSearch = (list, item) => {
  let low = 0
  let high = list.length

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]

    if (guess === item) return true
    
    if (guess > item) high = mid - 1
    else low = mid + 1
  }
  return false
}

export { 
  palindrome, fizzBuzz, anagram, findVowelsNum, fibonacci, findNumber, sum,
  selectionSort, quickSort, linearSearch
}