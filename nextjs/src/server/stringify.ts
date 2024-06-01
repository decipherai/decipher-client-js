/**
 * this file is used to serialize log message to string
 *
 */

export type StringifyOptions = {
  // limit of string length
  stringLengthLimit?: number;
  /**
   * limit of number of keys in an object
   * if an object contains more keys than this limit, we would call its toString function directly
   */
  numOfKeysLimit: number;
  /**
   * limit number of depth in an object
   * if an object is too deep, toString process may cause OOM
   */
  depthOfLimit: number;
};

/**
* judge is object
*/
function isObject(obj: unknown): boolean {
return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
* judge the object's depth
*/
function isObjTooDeep(obj: Record<string, unknown>, limit: number): boolean {
if (limit === 0) {
  return true;
}

const keys = Object.keys(obj);
for (const key of keys) {
  if (
    isObject(obj[key]) &&
    isObjTooDeep(obj[key] as Record<string, unknown>, limit - 1)
  ) {
    return true;
  }
}

return false;
}

/**
* stringify any js object
* @param obj - the object to stringify
*/
export function stringify(
obj: unknown,
stringifyOptions?: StringifyOptions,
): string {
const options: StringifyOptions = {
  numOfKeysLimit: 50,
  depthOfLimit: 4,
};
Object.assign(options, stringifyOptions);
const stack: unknown[] = [];
const keys: unknown[] = [];
return JSON.stringify(
  obj,
  function (key, value: string | bigint | object | null | undefined) {
    /**
     * forked from https://github.com/moll/json-stringify-safe/blob/master/stringify.js
     * to deCycle the object
     */
    if (stack.length > 0) {
      const thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) {
        if (stack[0] === value) {
          value = '[Circular ~]';
        } else {
          value =
            '[Circular ~.' +
            keys.slice(0, stack.indexOf(value)).join('.') +
            ']';
        }
      }
    } else {
      stack.push(value);
    }
    /* END of the FORK */

    if (value === null) return value;
    if (value === undefined) return 'undefined';
    if (shouldIgnore(value as object)) {
      return toString(value as object);
    }
    if (typeof value === 'bigint') {
      return value.toString() + 'n';
    }
    if (value instanceof Error) {
      return value.stack
        ? value.stack + '\nEnd of stack for Error object'
        : value.name + ': ' + value.message;
    }
    return value;
  },
);

/**
 * whether we should ignore obj's info and call toString() function instead
 */
function shouldIgnore(_obj: object): boolean {
  // outof keys limit
  if (isObject(_obj) && Object.keys(_obj).length > options.numOfKeysLimit) {
    return true;
  }

  // is function or bigint
  if (typeof _obj === 'function') {
    return true;
  }

  /**
   * judge object's depth to avoid OOM
   */
  if (
    isObject(_obj) &&
    isObjTooDeep(_obj as Record<string, unknown>, options.depthOfLimit)
  ) {
    return true;
  }

  return false;
}

/**
 * limit the toString() result according to option
 */
function toString(_obj: object): string {
  let str = _obj.toString();
  if (options.stringLengthLimit && str.length > options.stringLengthLimit) {
    str = `${str.slice(0, options.stringLengthLimit)}...`;
  }
  return str;
}
}