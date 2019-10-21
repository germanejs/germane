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
 * @param {*} current
 * @param {*} relative
 * @param {Object} options
 * @returns {Number}
 */
function differenceUsingTime(current, relative, options = { includeTime: false }) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(relative)) return new RangeError("Invalid Date");

  if (!isObject(options)) return new TypeError("Invalid option... Expects an object with a property includeTime");

  if (hasProp(options, "includeTime") && !isBool(options.includeTime)) return new TypeError("Expects property includeTime to be a boolean value");

  const newStart = typeof current === "number" ? new Date(current) : current;
  const newEnd = typeof relative === "number" ? new Date(relative) : relative;

  const one = epoch(
    newStart.getUTCFullYear(),
    newStart.getUTCMonth() + 1,
    newStart.getUTCDate(),
    0,
    0,
    0,
    0,
    0,
  );
  const two = epoch(
    newEnd.getUTCFullYear(),
    newEnd.getUTCMonth() + 1,
    newEnd.getUTCDate(),
    0,
    0,
    0,
    0,
    0,
  );

  // prettier-ignore
  const timestamp = options.includeTime === true
    ? newEnd.getTime() - newStart.getTime()
    : two - one;

  return timestamp;
}

module.exports = differenceUsingTime;
