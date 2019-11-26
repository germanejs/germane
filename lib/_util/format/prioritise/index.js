/**
 * @author Simeon Akpanudo
 * @fileoverview Handles the prioritization of object keys
 * and values(usually a number), depending on the array provided and the object's value.
 */

"use strict";

const hasProp = require("../../validations/hasProp");
/**

* @name toPriority
 * @param {Object} obj Object of priorities to prioritize depending on size.
 * @param {Array} arr Array of priorities in order.
 * @returns {Array} Array of largest number and it name.
 * @summary Prioritises object keys according to given array,
 * returns the first one if its value > 0,
 *  else it moves to the next, and if the all object's value is zero, it simply uses the last one.
 */

// Math.abs is called on the object value to only use values between 0 and 1,
// no negative (as totalDays in negative dates returns a negative number).

function toPriority(obj, arr) {
  if (arr.length === 1 && hasProp(obj, arr[0])) {
    if (arr[0].match(/total+/)) {
      return [Math.abs(obj[arr[0]]), arr[0].replace(/total/, "").toLowerCase()];
    }
    return [obj[arr[0]], arr[0]];
  }

  if (hasProp(obj, arr[0]) && Math.abs(obj[arr[0]]) > 0) {
    if (arr[0].match(/total+/)) {
      return [Math.abs(obj[arr[0]]), arr[0].replace(/total/, "").toLowerCase()];
    }
    return [Math.abs(obj[arr[0]]), arr[0]];
  }
  // eslint-disable-next-line max-len
  if (hasProp(obj, arr[0]) && Math.abs(obj[arr[0]]) < 1) return toPriority(obj, arr.slice(1, arr.length));
  return null;
}

module.exports = toPriority;
