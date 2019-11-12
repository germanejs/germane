/**
 * @author Simeon Akpanudo
 * @fileoverview Handles the replacing of Date Units.
 */

"use strict";

const padInt = require("../padInt");
function replaceUnit(
  date,
  units = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    ms: 0,
  },
) {
  const {
    year, month, day, hour, minute, second, ms,
  } = { ...units };

  const val = [
    "getUTCMonth",
    "getUTCDate",
    "getUTCFullYear",
    "getUTCHours",
    "getUTCMinutes",
    "getUTCSeconds",
    "getUTCMilliseconds",
  ]
    .map((value, index, array) => {
      return {
        [array[index].substr(6, array[index].length - 1).toLowerCase()]:
          value === "getUTCMilliseconds"
            ? padInt(
              value === "getUTCMonth"
                ? new Date(date)[array[index]]() + 1
                : new Date(date)[array[index]](),
              "padStart",
              3,
              "0",
            )
            : padInt(
              value === "getUTCMonth"
                ? new Date(date)[array[index]]() + 1
                : new Date(date)[array[index]](),
              "padStart",
              2,
              "0",
            ),
      };
    })

    .reduce((prev, current) => {
      return { ...prev, ...current };
    }, 0);

  const iso = `${padInt(year, "padStart", 4, "0") || val.fullyear}-${padInt(
    month,
    "padStart",
    2,
    "0",
  ) || val.month}-${padInt(day, "padStart", 2, "0") || val.date}T${padInt(
    hour,
    "padStart",
    2,
    "0",
  ) || val.hours}:${padInt(minute, "padStart", 2, "0") || val.minutes}:${padInt(
    second,
    "padStart",
    2,
    "0",
  ) || val.seconds}.${padInt(ms, "padStart", 3, "0") || val.milliseconds}Z`;
  // eslint-disable-next-line quotes
  return String(iso);
}

module.exports = replaceUnit;
