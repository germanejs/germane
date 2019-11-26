/**
 * @author Simeon Akpanudo
 * @fileoverview Fn creates a timer.
 */

"use strict";

const parseTimer = require("./_util/parseTimer");
const { isNumber, isObject } = require("../_util/validations/validatePropTypes");
/**
 *  Creates a timer using a given duration and an interval.
 * @namespace timer
 * @typedef {Function} Timer
 * @param {Number} [duration]
 * @param {Object} [options]
 * @param {Number} [options.interval]
 * @param {Number} [options.wait]
 */

function timer(duration = 0, options = { interval: 1000, wait: 0 }) {
  if (!isNumber(duration)) return new TypeError("Invalid duration: expected a number");
  if (!isObject(options)) return new TypeError("Invalid options: expected an object");

  if (options.interval && !isNumber(options.interval)) return new TypeError("Invalid interval: expected a number");

  if (options.wait && !isNumber(options.wait)) return new TypeError("Invalid option wait: expected a number");
  // @ts-ignore
  return parseTimer({ duration, options });
}

module.exports = timer;
