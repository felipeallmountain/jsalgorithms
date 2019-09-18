// SUM ALL VALUES FROM RANGE NAIVE
export const addUpToSumNaive = n => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }  

  return total
}

// SUM ALL VALUES FROM RANGE REFACTOR
export const addUpToSumRefactor = n => n * (n + 1) / 2

// MULTIPLE POINTERS NAIVE SOLUTION
// find the first couple of values that sum 0 in a sorted array
// sumZero([-2, -1, 0, 1, 2]) ---> [-2, 2]
export const sumZeroNaive = arr => {
  // loop arr
  for (let i = 0; i < arr.length; i++) {
    // loop arr again for each val
    for (let j = i + 1; j < arr.length; j++) {
      // check if val2 + val is equal to 0
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// MULTIPLE POINTERS REFACTOR SOLUTION
// find the first couple of values that sum 0 in a sorted array
// sumZero([-2, -1, 0, 1, 2]) ---> [-2, 2]
export const sumZeroRefactor = arr => {
  // define array pointers
  let left = 0
  let right = arr.length - 1

  // operate while left < right
  while (left < right) {
    // sum elems from left and right pointers
    const sum = arr[left] + arr[right]

    // check if sum is 0, then return
    if (sum === 0) return [arr[left], arr[right]]

    // if sum > 0, decrease right pointer, else increase left pointer
    sum > 0 ? right-- : left++
  }
}

// FREQUENCY COUNTER NAIVE
// compare if arr2 content has the 2 exponential of all content in arr1
// same([3, 4, 5], [16, 25, 9]) --> true
// same([3, 4], [16, 25, 9]) --> false
// same([3, 4, 5], [45, 5, 1]) --> false
export const sameNaive = (arr1, arr2) => {
  // check if arr1.length is the same as arr2.length
  if (arr1.length !== arr2.length) return false

  // loop arr1 and compare to arr2
  for (let i = 0; i < arr1.length; i++) {
    // get current index from arr1 to arr2 by operating exponential
    const currentIndex = arr2.indexOf(arr1[i] ** 2) // indexOf is another loop

    // if currentIndex is === -1, return false
    if (currentIndex === -1) return false

    // if current index is > -1, remove item from arr2
    arr2.splice(currentIndex, 1)
  }
  return true
}

const populateCounter = arr => {
  // create frequencyCounter
  let frequencyCounter = {}

  // loop arr
  for (let val of arr) {
    // if frequencyCounter[val] is falsey, assign 0, else, sum 1
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
  }

  return frequencyCounter
}

// FREQUENCY COUNTER NAIVE
export const sameRefactor = (arr1, arr2) => {
  // check if arr1.length is the same as arr2.length
  if (arr1.length !== arr2.length) return false
  
  // create 2 objects from the arrays with the element count on each one (ie: {1: 2, 2: 5, 25: 3})
  // favor object over array
  const frequencyCounter1 = populateCounter(arr1)
  const frequencyCounter2 = populateCounter(arr2)

  // loop frequencyCounter1 to compare with frequencyCounter2
  for (let key in frequencyCounter1) {
    // check if exponential is contained in frequencyCounter2
    if (!(key ** 2 in frequencyCounter2)) return false

    // check if values for keys in frequencyCounters have different value
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false
  }

  // return true if loop passed
  return true
}

/*
 implement a function called countUniqueValues, wich accepts a sorted
 array, and counts the unique values, there can be negative values

 countUniqueValues([1, 1, 1, 2]) --> 2
 countUniqueValues([1, 2, 3, 4, 5, 5, 5, 6, 7]) --> 7
 countUniqueValues([]) --> 0
 countUniqueValues([-2, -1, -1, 0, 1]) --> 4
*/
export const countUniqueValues = list => {
  switch(list.length) {
    case 0:
      return 0
    case 1:
      return 1
    break;
  }

  let low = 0
  let high = 1
  let counter = 1

  while (high < list.length) {
    const lowVal = list[low]
    const highVal = list[high]

    if (lowVal !== highVal) {
      low++
      high++
      list[low] = highVal
      counter++
    } else {
      high++
    }
  }
  return counter
}

// GREATER COMMON DIVISOR
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

export const gcdArr = arr => {
  let factors = arr[0]
  
  for (let i = 1; i < arr.length; i++) {
    factors = gcd(factors, arr[i])
  }
  return factors
}

