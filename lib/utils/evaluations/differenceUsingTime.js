/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in time.
 * These function is an helper for differenceIn{Hour|Minute|Seconds|Milliseconds|Days|Weeks}
 */

"use strict";

const { isDateOrNumber, isObject, isBool } = require("../validations/validatePropTypes");

const validateDate = require("../validations/validateDate");
const hasProp = require("../validations/hasProp");
const epoch = require("./epoch");

/**
 *
 * @param {*} dateOne
 * @param {*} dateTwo
 * @param {Object} options
 * @returns {Number}
 */
function differenceUsingTime(dateOne, dateTwo, options = { includeTime: false }) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateTwo)) return new RangeError("Invalid Date");

  if (!isObject(options)) return new TypeError("Invalid option... Expects an object with a property includeTime");

  if (hasProp(options, "includeTime") && !isBool(options.includeTime)) return new TypeError("Expects property includeTime to be a boolean value");

  const nDateOne = typeof dateOne === "number" ? new Date(dateOne) : dateOne;
  const nDateTwo = typeof dateTwo === "number" ? new Date(dateTwo) : dateTwo;

  const one = epoch(
    nDateOne.getUTCFullYear(),
    nDateOne.getUTCMonth() + 1,
    nDateOne.getUTCDate(),
    0,
    0,
    0,
    0,
    0,
  );
  const two = epoch(
    nDateTwo.getUTCFullYear(),
    nDateTwo.getUTCMonth() + 1,
    nDateTwo.getUTCDate(),
    0,
    0,
    0,
    0,
    0,
  );

  const timestamp = options.includeTime === true ? nDateTwo.getTime() - nDateOne.getTime() : two - one;

  return timestamp;
}

module.exports = differenceUsingTime;
