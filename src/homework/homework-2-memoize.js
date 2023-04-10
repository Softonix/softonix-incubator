// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

let sum = function (...args) {
  return args.reduce((a, b) => a + b, 0)
}

function memoize (func) {
  const cache = new Map()

  return function (...args) {
    const sumNumber = JSON.stringify(args.sort((a, b) => a - b))
    if (cache.has(sumNumber)) {
      console.log('cached number')
      return cache.get(sumNumber)
    }

    const result = func(...args)
    cache.set(sumNumber, result)
    return result
  }
}

sum = memoize(sum)

console.log(sum(1, 1, 3))
console.log(sum(1, 3, 1))
console.log(sum(1, 2))
console.log(sum(2, 1))
console.log(sum(1, 2))
