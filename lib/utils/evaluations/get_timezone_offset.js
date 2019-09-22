/**
 * @author Simeon Akpanudo
 * @fileoverview Module returns the an object of timezone info.
 */

"use strict";

const { divmod } = require("../roundingMethods");
const epoch = require("./epoch");
const hasProp = require("../validations/hasProp");
/**
 *
 * @param {String} timezone Valid timezone in these format (Continent/City)
 * ```javascript
 * getTimeZoneOffset("Africa/Lagos")
 * //=> {offsetInMinutes: 60, tzname: "West African Standard Time", "+0100"}
 * ```
 */
function getTimeZoneOffset(timezone, stamp) {
  let intl;

  try {
    intl = new Intl.DateTimeFormat("default", {
      timeZone: timezone,
      hour12: false,
      timeZoneName: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      second: "2-digit",
      minute: "2-digit",
    }).formatToParts(stamp);
  } catch (error) {
    return new RangeError(error.message);
  }

  // mapping the values to an object
  const values = intl.map(({ type, value }) => {
    if (/year|month|day|hour|minute|second/.test(type)) {
      return { [type]: parseInt(value, 10) };
    }
    return { [type]: value };
  });

  // reducing using the epoch function
  // for explanation on the epoch function? please see the docs.
  const {
    year, month, day, hour, minute, second,
  } = values
    .filter(value => typeof Object.values(value)[0] === "number")
    .reduce((prev, current) => {
      return { ...prev, ...current };
    }, {});

  const posix = epoch(year, month, day, hour, minute, second);

  // 18303062400000 => year 2550 in utc // these can be subbed for any valid utc timestamp.
  const stampSubMilli = stamp - (stamp % 1000);
  const anon = (posix - stampSubMilli) / 1000 / 60;

  // prettier-ignore
  // eslint-disable-next-line no-nested-ternary
  const offsetInMinutes = stamp < 0
    ? (anon <= -1440 ? 1440 - Math.abs(anon) : anon)
    : anon > 840 ? 1440 - anon : anon;

  // getting the offset hour and minute.
  const [hr, min] = divmod(offsetInMinutes, 60);

  // prettier-ignore
  // eslint-disable-next-line no-nested-ternary
  const offsetSign = stamp < 0
    ? (posix < stampSubMilli ? "-" : "+")
    : posix >= stampSubMilli ? "+" : "-";

  let tzname = values.filter((value, index, array) => hasProp(array[index], "timeZoneName"))[0]
    .timeZoneName;

  // some historical dates lacks timezone name for most cities.
  // so we use a more future date instead to get the timezone name.
  // Note: These might be removed in the future.

  const fixTzname = /GMT+(?:[+|-][0-9]{2}:[0-9]{2})/.test(tzname)
    ? new Intl.DateTimeFormat("default", {
      timeZone: timezone,
      timeZoneName: "long",
    })
      .formatToParts(epoch(2999, values.year, values.month))
      .map(({ type, value }) => {
        return { [type]: value };
      })
      .filter((val, index, arr) => hasProp(arr[index], "timeZoneName"))[0].timeZoneName
    : tzname;

  const utcoffset = `${offsetSign}${("" + Math.abs(hr)).padStart(2, "0")}${(
    "" + Math.abs(min)
  ).padStart(2, "0")}`;
  return {
    offsetInMinutes,
    tzname: /Greenwich Mean Time/.test(fixTzname) ? "Coordinated Universal Time" : fixTzname,
    utcoffset,
  };
}

module.exports = getTimeZoneOffset;
