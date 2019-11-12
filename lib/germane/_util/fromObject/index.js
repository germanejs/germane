/* eslint-disable func-names */
/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 */

"use strict";

const epoch = require("../../../_util/evaluations/epoch");

function fromObject(object) {
  const newObject = {
    date: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    ...object,
  };
  if (newObject.year === undefined || newObject.month === undefined) return new RangeError("Invalid Date");
  const isNumber = Object.values(object)
    .map(function (x) {
      return typeof x === "number";
    })
    .reduce(function (prev, current) {
      return prev && current;
    }, true);
  if (!isNumber) return new TypeError("Invalid Date");
  if (
    newObject.year < 1
    || newObject.year > 9999
    || (newObject.month < 0 || newObject.month > 11)
    || (newObject.date < 1 || newObject.date > 31)
    || (newObject.hours < 0 || newObject.hours > 23)
    || (newObject.minutes < 0 || newObject.minutes > 59)
    || (newObject.seconds < 0 || newObject.seconds > 59)
    || newObject.milliseconds < 0
  ) return new RangeError("Invalid Date");

  return epoch(
    newObject.year,
    newObject.month + 1,
    newObject.date,
    newObject.hours,
    newObject.minutes,
    newObject.seconds,
    newObject.milliseconds,
  );
}

module.exports = fromObject;
