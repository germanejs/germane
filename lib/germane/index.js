/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 */

"use strict";

const parse = require("./_util/parse");
const defaultLocale = require("../locale/en_US");
/**
 * @typedef {import('../locale/en_US/index.js').Locale} Locale
 */

/**
 * Enables basic storage and retrieval of dates and times.
 * @typedef {function} Germane
 * @interface Germane
 * @namespace germane
 * @param {Number|String|Date|Undefined|Array|Germane} value Timestamp
 * or ISO string represent the date and time
 * @param {String|Undefined} [timezone] timezone name. if undefined local timezone is used instead.
 * @param {Object} [options] options
 * @param {Locale} [options.locale] An locale object, defaults to en-US
 * ```javascript
 * germane("2019-11-09 23:00:00Z", "Africa/Lagos");
 * germane(-1546318800000, "America/Los_Angeles");
 * germane(-1546318800000, "America/Los_Angeles", { locale: de_DE });
 * germane() //=> returns object of time units.
 * ```
 */
function germane(value = Date.now(), timezone, options = { locale: defaultLocale }) {
  const x = parse(value, timezone, options);
  // eslint-disable-next-line no-nested-ternary
  return x instanceof RangeError
    ? new RangeError(x.message)
    : x instanceof TypeError
      ? new TypeError(x.message)
      : x;
}
module.exports = germane;
