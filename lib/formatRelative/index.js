/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview Returns a relative time
 */

"use strict";

const parseRelative = require("./_util/parseRelative");
const defaultLocale = require("../locale/en_US");
/**
 *
 * @param {Date|Number} base Current Date
 * @param {Date|Number} relative Relative Date.
 * ```js
 * formatRelative(new Date("2019-11-11 23:09:11"), new Date("2019-11-11 23:09:11")) //=> 'Just now';
 * formatRelative(germane("20191109T131311Z"), germane("2019-11-09")) //=> '13 hours ago';
 * ```
 * Returns the relative value of two given date,
 * with the first date parameter as the base,
 * and second as the relative date.
 */
function formatRelative(base, relative, options = { locale: defaultLocale }) {
  const x = parseRelative(base, relative, options);

  // eslint-disable-next-line no-nested-ternary
  return x instanceof TypeError
    ? new TypeError(x.message)
    : x instanceof RangeError
      ? new RangeError(x.message)
      : x;
}

module.exports = formatRelative;
