/*
  Переписати тип TUnified наступним чином.
  Він повинен взяти всі поля з IFirst, з ISecond лише поле 'd', з IThird все окрім поля 'h'
*/

interface IFirst {
  a?: number
  b?: string
  c?: string
}

interface ISecond {
  d: string
  e: number
  f: number
}

interface IThird {
  g: boolean
  h: string
  i: number
}

type TUnified = IFirst | ISecond & { d: string } | Omit<IThird, 'h'>;

export {
  type TUnified
}
