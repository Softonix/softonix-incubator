// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

export const arrayHandler = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num)
    }, num * 1000)
  })
}

const array: number[] = [1, 2, 3, 4, 5]

export const promiseExecutor = async (): Promise<void> => {
  // variant1
  for (const el of array) {
    const res = await arrayHandler(el)
    console.log(res)
  }

  // variant2
  // for (let i = 0; i < array.length; i++) {
  //   const el: any = array[i]
  //   const res = await arrayHandler(el)
  //   console.log(res)
  // }
}
