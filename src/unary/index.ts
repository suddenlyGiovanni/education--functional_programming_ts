type Unary<T = any> = (fn: (a: T, ...args: any[]) => any) => (a: T) => any;

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly 1 parameter.
 * Any extraneous parameters will not be passed to the supplied function.
 */
export const unary: Unary = fn => arg => fn(arg);
