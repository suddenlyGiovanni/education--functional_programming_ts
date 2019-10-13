/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { isPlainObject, isArray } from 'lodash'
// collection: A
// reducer: (C, B) => C
// initialValue: C

export function reduce<A extends any[] | {}, B, C>(
  collection: A,
  reducer: (
    accumulator: C,
    value: B,
    currentIndexKey?: number | string,
    collection?: A
  ) => C,
  initialValue?: C
) {
  if (isArray(collection)) {
    let accumulator: C = initialValue ? initialValue : collection[0]
    for (let index = 0; index < collection.length; index++) {
      const value = collection[index]
      accumulator = reducer(accumulator, value, index, collection)
    }
    return accumulator
  }
  if (isPlainObject(collection)) {
    const _collection = Object.entries(collection)
    let accumulator: C = initialValue ? initialValue : _collection[0][1]
    for (let index = 0; index < _collection.length; index++) {
      const [key, value] = _collection[index]
      accumulator = reducer(accumulator, value, key, collection)
    }
    return accumulator
  }
}

const add = (
  a: number,
  b: number,
  currentIndex: any,
  collection: any
): number => {
  console.log('currentIndex', currentIndex)
  console.log('collection', collection)
  return a + b
}

const summed = reduce([1, 2, 3], add, 0) //?

const _summed = reduce({ ten: '10', five: 5 }, add, 0) //?
