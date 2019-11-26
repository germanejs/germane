/* eslint-disable func-names */
/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 */

"use strict";

const epoch = require("../../../_util/evaluations/epoch");

/**
 * @param {Array} array an array containg a date and time unit.
 * @summary converts an array of numbers in a unix timestamp.
 */
function fromArray(array) {
  if (array.length < 2) return new RangeError("Invalid Date");
  const isNumber = array
    .map(function (x) {
      return typeof x === "number";
    })
    .reduce(function (prev, current) {
      return prev && current;
    }, true);

  if (!isNumber) return new TypeError("Invalid Date");
  const defaultArray = [1970, 1, 1, 0, 0, 0, 0];
  // prettier-ignore
  const addToArray = array.length < 7
    ? array.concat(defaultArray.slice(array.length, defaultArray.length))
    : array;

  if (
    addToArray[0] < 1
    || addToArray[0] > 9999
    || addToArray[1] < 0 || addToArray[1] > 11
    || addToArray[2] < 1 || addToArray[2] > 31
    || addToArray[3] < 0 || addToArray[3] > 23
    || addToArray[4] < 0 || addToArray[4] > 59
    || addToArray[5] < 0 || addToArray[5] > 59
    || addToArray[6] < 0
  ) return new RangeError("Invalid Date");

  // prettier-ignore
  // eslint-disable-next-line max-len
  return epoch(addToArray[0], addToArray[1] + 1, addToArray[2], addToArray[3], addToArray[4], addToArray[5], addToArray[6]);
}

module.exports = fromArray;
