import { createURLCategories } from './createURLCategories.util'

export const arrayOfStringsToObject = async (arr: string[][]): Promise<any> => {
  const obj = {}
  await arr.forEach(async (splitted: string[]) => {
    let curr: any = obj
    let copy = [...splitted]
    let last: any = splitted.pop()
    let beforeLast: any = splitted.pop() ?? last
    await [...splitted].forEach((sub) => {
      if (!curr.hasOwnProperty(sub)) {
        curr[sub] = {}
      }
      curr = curr[sub]
    })
    if (!curr[beforeLast]) {
      curr[beforeLast] = []
    }
    if (Array.isArray(curr[beforeLast]))
      curr[beforeLast] = [
        ...curr[beforeLast],
        {
          name: last,
          url: createURLCategories(copy.join('/').replace(/\s/g, '-'))
        }
      ]
  })
  return obj
}
