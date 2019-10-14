import { reduce } from '../reduce/reduce'

function map<A extends B[] | { [key: string]: B }, B>(
  collection: A,
  mapper: <A1, B1>(currentValue: A1, indexKey?: string | number, collection?: A) => B1
) {
  return reduce(collection, (_, curr, idxKey, coll) => {
    return mapper(curr, idxKey, coll)
  }, [])
}


const add = <T>(a: number) => (b: number, ...rest: T[]): number => {
  console.log(...rest)
  return a + b
}
const add2 = add(2)

map([1,2,3], add2) //?
