/**
 * @author Simeon Akpanudo
 */

"use strict";

const germaneDate = require("./parse_germane_date");
/**
 *
 * @param {Number|String} date Timestamp or ISO string represent the date and time
 * @param {String|Undefined} timezone timezone name. if undefined local timezone is used instead.
 * @description Enables storage an manipulation of date.
 * ```javascript
 * germane("2019-11-09 23:00:00Z", "Africa/Lagos");
 * germane(-1546318800000, "America/Los_Angeles");
 * germane() //=>returns localtime
 * ```
 * @returns {typeof germane}
 */
function germane(date, timezone) {
  return germaneDate(date, timezone);
}
module.exports = germane;
