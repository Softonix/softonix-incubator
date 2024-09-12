// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a: number, b: number) { return a + b } // for test

// eslint-disable-next-line
function memoize (fn: any) {
  const cache = new Map()

  return (...args: number[]) => {
    const key = JSON.stringify(args)

    console.log(cache, key, cache.has(key))

    if (cache.has(key)) {
      console.log('Результат повернуто з кешу')
      return cache.get(key)
    } else {
      console.log('Обрахований результат')
      const result = fn(...args)
      cache.set(key, result)
      return result
    }
  }
}

// приклад виконання вашого коду
export const sumMemoized = memoize(sum)
