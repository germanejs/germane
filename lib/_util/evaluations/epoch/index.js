/**
 * @author Simeon Akpanudo
 * @fileoverview Epoch function turn a given date to unix epoch timestamp.
 */

"use strict";

const { trunc } = require("../roundingMethods");
const { daysInPrevMonths } = require("../daysInYear");
const ordinalOfPrevYear = require("../ordinalOfPrevYear");

/**
 *
 * @param {Number} year Year
 * @param {Number} month Month
 * @param {Number} day Date
 * @param {Number} hour Hours
 * @param {Number} minute Minutes
 * @param {Number} second Seconds
 * @param {Number} ms Milliseconds
 * @param {Number} tz Timezone offset in seconds
 * **example** __UTC+1 = 1 hour after the UTC time which is equivalent to 60 minutes__.

 * @summary Epoch function uses the specified datetime units
 and returns a unix timestamp of the given date as an ISO8601 format.

 * **Note**: if not parameter is passed the function simple returns 0.
 meaning that the default parameters is 1970 01 01 00:00:00.
 * @example ```javascript
 *  epoch(2019, 4, 1, 4, 7, 23, 500, -60) //=> 1554091643500
 * // Which is equivalent to ISO8601 format 2019-04-01T03:07:23.500Z.
 * ```
 */
function epoch(year = 1970, month = 1, day = 1, hour = 0, minute = 0, second = 0, ms = 0, tz = 0) {
  const unixEpoch = {
    year: 1970,
    month: 1,
    day: 1,
    hour: trunc(tz / 60) + hour,
    minute: trunc(tz % 60) + minute,
    second: second,
    ms: ms,
  };
  let mutableSeconds = 0;

  let unixHour;
  let unixMinute;
  let unixDateTime;

  const x = daysInPrevMonths(year, month);

  mutableSeconds = (ordinalOfPrevYear(year) + x + day - 719163) * 1000 * 86400;
  unixHour = unixEpoch.hour * 3600 * 1000;
  unixMinute = unixEpoch.minute * 60 * 1000;
  unixDateTime = mutableSeconds + unixHour + unixMinute + second * 1000 + ms;

  return unixDateTime;
}
module.exports = epoch;
