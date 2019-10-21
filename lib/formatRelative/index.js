/**
 * @author Simeon Akpanudo
 * @fileoverview Returns a relative time
 */

"use strict";

const format = require("./format");

/**
 *
 * @param {Date|Number} current Current Date
 * @param {Date|Number} relative Relative Date.
 * ```js
 * formatRelative(new Date("2019-11-11 23:09:11"), new Date("2019-11-11 23:09:11")) //=> 'Just now';
 * formatRelative(germane("20191109T131311Z"), germane("2019-11-09")) //=> '13 hours ago';
 * ```
 * Returns the relative value of two given date,
 * with the first date parameter as the current,
 * and second as the relative date.
 */
function formatRelative(current, relative) {
  return format(current, relative);
}

module.exports = formatRelative;
