/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 */

"use strict";

const parse = require("./_util/parse");
const defaultLocale = require("../locale/en_US");
/**
 *
 * @param {Number|String|Date|Undefined|Array|{}} date Timestamp
 * or ISO string represent the date and time
 * @param {String|Undefined} timezone timezone name. if undefined local timezone is used instead.
 * @param {{locale: {}}} options An locale object, defaults to en-US
 * @description Enables storage an manipulation of date.
 * ```javascript
 * germane("2019-11-09 23:00:00Z", "Africa/Lagos");
 * germane(-1546318800000, "America/Los_Angeles");
 * germane(-1546318800000, "America/Los_Angeles", { locale: de_DE });
 * germane() //=>returns localtime
 * ```
 * @returns {TypeError|RangeError|{}}
 */
function germane(date = Date.now(), timezone, options = { locale: defaultLocale }) {
  const x = parse(date, timezone, options);
  // eslint-disable-next-line no-nested-ternary
  return x instanceof RangeError
    ? new RangeError(x.message)
    : x instanceof TypeError
      ? new TypeError(x.message)
      : x;
}
module.exports = germane;
