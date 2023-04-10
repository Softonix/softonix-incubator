// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

export const arrayHandler = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num)
    }, num * 1000)
  })
}

function loopPromise (array) {
  let promiseGroup = new Promise((resolve) => {
    resolve()
  })

  array.forEach(item => {
    promiseGroup = promiseGroup.then(() => arrayHandler(item))
  })
  return promiseGroup
}

const array = [1, 2, 3, 4, 5]

console.log(array)

loopPromise(array)
