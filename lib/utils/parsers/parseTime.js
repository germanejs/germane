/**
 * @author Simeon Akpanudo
 * @fileoverview handles time parsing and formatting.
 */

"use strict";

/**
 *
 * @param {Date} date Date object or Germane object is used to parse time!
 * @description these function parses the date object,
 * gets the time and returns all information related to time
 * @returns {Object} returns full-time|hour24|hour12|minutes|seconds|
 * timezoneOffset|timezone-name|meridiem|locale-datetime(defaults to machine dateTime)
 */
function parseTime(date) {
  const dateToString = date.toString();
  const all = dateToString.split(" ");

  const tzabbr = [];
  const tzname = dateToString.split("(")[1].replace(")", "");
  const tznameSplit = tzname.split(" ");
  for (let i = 0; i <= tznameSplit.length - 1; i += 1) {
    tzabbr.push(tznameSplit[i][0]);
  }
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const tzoffset = all[5].slice(3, all[5].length);
  const modHour = hour % 12;
  const hour12 = modHour === 0 ? "12" : modHour;

  const time = {
    full: all[4],
    hour24: {
      decimal: {
        zeroPadded: ("" + hour).padStart(2, "0"),
        nonZeroPadded: "" + hour,
      },
    },
    hour12: {
      decimal: {
        zeroPadded: ("" + hour12).padStart(2, 0),
        nonZeroPadded: "" + hour12,
      },
    },
    minute: {
      decimal: {
        zeroPadded: ("" + min).padStart(2, 0),
        nonZeroPadded: "" + min,
      },
    },
    seconds: {
      decimal: {
        zeroPadded: ("" + sec).padStart(2, 0),
        nonZeroPadded: "" + sec,
      },
    },
    milliseconds: {
      decimal: {
        zeroPadded: ("" + date.getMilliseconds()).padStart(3, "0"),
      },
    },
    meridiem: {
      small: hour < 12 ? "am" : "pm",
      big: hour < 12 ? "AM" : "PM",
      dotted: hour < 12 ? "a.m" : "p.m",
    },
    timestamp: {
      milliseconds: "" + date.getTime(),
      seconds: "" + Math.trunc(date.getTime() / 1000),
    },
    apprTime: `${("" + hour12).padStart(2, 0)}:${("" + min).padStart(2, 0)}:${("" + sec).padStart(
      2,
      0,
    )} ${hour < 12 ? "AM" : "PM"}`,
    tzOffset: {
      normal: tzoffset,
      colonized: tzoffset.slice(0, 3) + ":" + tzoffset.slice(3, tzoffset.length),
    },
    tzLong: "" + tzname,
    tzShort: /Coordinated Universal Time/.test(tzname) ? "" : tzabbr.join(""),
  };

  return time;
}

module.exports = parseTime;
