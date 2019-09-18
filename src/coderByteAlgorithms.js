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
