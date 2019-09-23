// FIND MIDDLE ELEMENT IN LINKED LIST
// https://coderbyte.com/algorithm/linked-list-middle-element

export const DataNode = (data, next) => ({data, next})

export const findMiddleNode = headNode => {
  let fastPointer = headNode
  let slowPointer = headNode

  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next
    slowPointer = slowPointer.next
  }

  return slowPointer.data
}

// GENERATE PRIMES UP TO N USING THE SIEVE OF ERATOSTHENES ALGORITHM
// https://coderbyte.com/algorithm/generate-n-primes-sieve-of-eratosthenes-algorithm

export const generatePrimes = range => {
  const exclude = (inp, divider) => 
    inp % divider === 0 && inp !== divider

  let primes = []

  for (let i = 2; i <= range; i++) {
    if (!exclude(i, 2) && !exclude(i, 3) && !exclude(i, 5) && !exclude(i, 7)) {
      primes.push(i)
    }
  }

  return primes.join(',')
}


// Complete the oddNumbers function below.
export const oddNumbers = (l, r) => {
    let list = []
    for (let i = l; i <= r; i += 2) {
        const item = i % 2 ? i : i + 1
        if (item <= r) {
          list.push(item)
        }
    }
    return list
}

// write lottery winners (admios test)

const createLotteryNumbers = num  => {
  let lotteryNums = []
  for (let i = 1; i <= num; i++) {
    const val = i % 9 === 0 ? 9 : i % 9
    lotteryNums.push(val)
  }
  return lotteryNums
}

export const lotteryWinners = num => {
  const lotteryNumbers = createLotteryNumbers(num)
  let winners = 0

  let low = 0

  for (let high = 1; high < num; high++) {
    const subs = lotteryNumbers[low] - lotteryNumbers[high]
    if (subs === 0) {
      winners++
      low++
    }
  }
  return winners
}
