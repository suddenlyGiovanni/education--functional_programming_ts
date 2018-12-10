export function ariety(fn: Function): number {
  if (typeof fn !== 'function') {
    throw new Error('fn is not a function');
  }
  return fn.length;
}
