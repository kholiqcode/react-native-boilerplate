/**
 * Checks if a JavaScript value is empty
 * @example
 *    isEmpty(null); // true
 *    isEmpty(undefined); // true
 *    isEmpty(''); // true
 *    isEmpty([]); // true
 *    isEmpty({}); // true
 * @param {any} value - item to test
 * @returns {boolean} true if empty, otherwise false
 */

export function isEmpty(value: unknown) {
  return (
    value == null || // check for null
    value === '' || // check for empty string
    (Array.isArray(value) && value.length === 0) || // check for empty array
    (typeof value === 'object' && Object.keys(value).length === 0) // check for empty object
  );
}
