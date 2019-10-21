/**
 * @author Simeon Akpanudo
 */

"use strict";

const { fromNegativeYear, fromPositiveYear } = require("./date_difference_evaluation");
const { trunc } = require("../roundingMethods");
const replaceUnit = require("./replaceUnit");
/**
 * @param {Number | Date} from Starting date or timestamp
 * @param {Number | Date} to Ending date or timestamp
 * @returns {Object} Returns object containing difference between both date
 */
function difference(from, to) {
  const newTo = typeof to === "number" ? new Date(to) : to;
  const newFrom = typeof from === "number" ? new Date(from) : from;
  const toMonth = newTo.getUTCMonth() + 1;
  const fromMonth = newFrom.getUTCMonth() + 1;
  const toYear = newTo.getUTCFullYear();
  const fromYear = newFrom.getUTCFullYear();
  const toDate = newTo.getUTCDate();
  const fromDate = newFrom.getUTCDate();
  const timestamp = new Date(
    replaceUnit(newTo, {
      hour: 23,
      minute: 59,
      second: 59,
      ms: 999,
    }),
  ).getTime()
    - new Date(
      replaceUnit(newFrom, {
        hour: 23,
        minute: 59,
        second: 59,
        ms: 999,
      }),
    ).getTime();

  const totalDays = trunc(timestamp / 86400000);

  const yeardiff = toYear - fromYear;

  if (yeardiff > 0) {
    return {
      ...fromPositiveYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate, totalDays),
      totalDays,
    };
  }
  if (yeardiff < 0) {
    return {
      ...fromNegativeYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate, totalDays),
      totalDays,
    };
  }

  const result = toMonth < fromMonth || (toMonth === fromMonth && toDate < fromDate)
    ? {
      ...fromNegativeYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate, totalDays),
      totalDays,
    }
    : {
      ...fromPositiveYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate, totalDays),
      totalDays,
    };

  return result;
}

module.exports = difference;
