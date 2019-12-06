/* eslint-disable no-nested-ternary */
/**
 * @author Simeon Akpanudo
 */

"use strict";

const { fromNegativeYear, fromPositiveYear } = require("./_util/parse");
const { trunc } = require("../roundingMethods");
const timestampToTime = require("../timestampToTime");

/**
 * @param {Number | Date} from Starting date or timestamp
 * @param {Number | Date} to Ending date or timestamp
 * @param { Object } [options]
 * @param {Boolean} [options.strict]
 * @returns {{year: number, month: number, week: number, day: number, totalMonth: number, totalDay: number, hour: number, minute: number, second: number, totalWeek: number, totalHour: number, totalMinute: number, totalSecond: number, totalMillisecond: number, millisecond: number}} Returns object containing difference between both date
 */
function difference(from, to, options = { strict: false }) {
  const { strict } = options;
  const newTo = typeof to === "number" ? new Date(to) : to;
  const newFrom = typeof from === "number" ? new Date(from) : from;
  const toMonth = newTo.getUTCMonth() + 1;
  const fromMonth = newFrom.getUTCMonth() + 1;
  const toYear = newTo.getUTCFullYear();
  const fromYear = newFrom.getUTCFullYear();
  const totalDay = trunc((newTo.getTime() - newFrom.getTime()) / 86400000);

  const yeardiff = toYear - fromYear;
  // getting the start-of-day of the starting day
  const newFromStartOfDay = newFrom.getTime()
    - newFrom.getUTCHours() * 3600000
    - newFrom.getUTCMinutes() * 60000
    - newFrom.getUTCSeconds() * 1000
    - newFrom.getUTCMilliseconds();

  const newToStartOfDay = newTo.getTime()
    - newTo.getUTCHours() * 3600000
    - newTo.getUTCMinutes() * 60000
    - newTo.getUTCSeconds() * 1000
    - newTo.getUTCMilliseconds();
  // gets the total time gone in the start/base date.
  const {
    hour: fromHour,
    minute: fromMinute,
    second: fromSecond,
    millisecond: fromMs,
  } = timestampToTime(
    yeardiff > 0
      ? newFromStartOfDay - newFrom.getTime()
      : yeardiff === 0
        ? newTo.getTime() >= newFrom.getTime()
          ? newFromStartOfDay - newFrom.getTime()
          : newFrom.getTime()
        : newFrom.getTime(),
  );

  const {
    hour: toHour, minute: toMinute, second: toSecond, millisecond: toMs,
  } = timestampToTime(
    yeardiff < 0
      ? newToStartOfDay - newTo.getTime()
      : yeardiff === 0
        ? newTo.getTime() < newFrom.getTime()
          ? newToStartOfDay - newTo.getTime()
          : newTo.getTime()
        : newTo.getTime(),
  );

  const toTime = toHour * 3600 * 1000 + toMinute * 60 * 1000 + toSecond * 1000 + toMs;
  const fromTime = fromHour * 3600 * 1000 + fromMinute * 60 * 1000 + fromSecond * 1000 + fromMs;
  // adds the remaining time in the start date and the used time in the end date.
  const totalTime = yeardiff > 0
    ? 86400000 - fromTime + toTime
    : yeardiff === 0
      ? newTo.getTime() >= newFrom.getTime()
        ? 86400000 - fromTime + toTime
        : fromTime - toTime + 86400000
      : fromTime - toTime + 86400000;

  const toDate = strict && totalTime < 86399999 ? newTo.getUTCDate() - 1 : newTo.getUTCDate();
  const fromDate = newFrom.getUTCDate();
  if (yeardiff > 0) {
    return {
      ...fromPositiveYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate),
      totalDay,
      ...(strict ? timestampToTime(newTo.getTime() - newFrom.getTime()) : {}),
    };
  }
  if (yeardiff < 0) {
    return {
      ...fromNegativeYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate),
      ...(strict ? timestampToTime(newTo.getTime() - newFrom.getTime()) : {}),
      totalDay,
    };
  }

  const result = toMonth < fromMonth || (toMonth === fromMonth && toDate < fromDate)
    ? {
      ...fromNegativeYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate),
      ...(strict ? timestampToTime(newTo.getTime() - newFrom.getTime()) : {}),
      totalDay,
    }
    : {
      ...fromPositiveYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate),
      ...(strict ? timestampToTime(newTo.getTime() - newFrom.getTime()) : {}),
      totalDay,
    };

  return result;
}

module.exports = difference;
