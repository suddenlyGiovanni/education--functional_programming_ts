import * as _ from 'lodash';
import { existy } from './existy/index';
import { truthy } from './truthy/index';

/**
 * A helper function that call the given action if the provided condition resolves to true
 * @param {*} condition - A condition that will be evaluated for truthfulness
 * @param {Function} action - An action to be performed
 */
function doWhen(condition: any, action: Function) {
  if (truthy(condition)) {
    return action();
  }
  return undefined;
}

/**
 * example:
 * @param {*} target
 * @param {string} name
 * @returns {Function | undefined}
 */
function executeIfHasField(target: any, name: string): Function | undefined {
  return doWhen(existy(target[name]), () => {
    // _.result(object, property, [defaultValue])
    // If the value of the named property is a function then invoke it with the object as context;
    // otherwise, return it.
    // If a default value is provided and the property doesn't exist than the default will be returned
    const result = _.result(target, name);
    console.log(['The result is', result].join(' '));
    return result;
  });
}
