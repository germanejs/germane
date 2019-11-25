/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview function creates a duration from given source.
 */

"use strict";

const {
  isString,
  isArray,
  isEmptyArray,
  isValidDateArray,
  isNumber,
} = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const add = require("../add");

function parseISODuration(duration) {
  const [period, time] = duration.split("T");
  const findDuration = (str, type) => {
    const dur = (str || "").match(/\-{0,1}(?:\d{1,}|\d{1,}\.\d{1,})[a-zA-Z]{1}/g) || [];
    const find = dur.find(a => new RegExp(`\-{0,1}(?:\\d{1,}|\\d{1,}\.\\d{1,})${type}{1}`).test(a));
    return find !== undefined ? Number(find.split(/[a-zA-Z]/, 1)[0]) : 0;
  };
  const Y = findDuration(period, "Y");
  const M = findDuration(period, "M");
  const D = findDuration(period, "D");
  const H = findDuration(time, "H");
  const Mi = findDuration(time, "M");
  const S = findDuration(time, "S");
  // prettier-ignore
  const data = add(0, {
    years: Y, months: M, days: D, hours: H, minutes: Mi, seconds: S,
  });
  return data.valueOf();
}

function parseNumberDuration(duration, unit) {
  const mapUnit = {
    years: x => add(0, { years: x }).valueOf(),
    months: x => add(0, { months: x }).valueOf(),
    days: x => add(0, { days: x }).valueOf(),
    weeks: x => x * 7 * 86400000,
    hours: x => add(0, { hours: x }).valueOf(),
    minutes: x => add(0, { minutes: x }).valueOf(),
    seconds: x => add(0, { seconds: x }).valueOf(),
    milliseconds: x => x,
  };
  const getMappedUnit = mapUnit[unit];
  return getMappedUnit !== undefined ? getMappedUnit(duration) : mapUnit.milliseconds(duration);
}

function durationFromDate(dates = [new Date(), new Date()]) {
  const [base, rel] = dates;
  const baseDate = typeof base === "number" ? base : base.valueOf();
  const relDate = typeof rel === "number" ? rel : rel.valueOf();
  return baseDate - relDate;
}

function durationFromString(string) {
  const [H, M, S] = string.split(":").map(a => Number(a || 0));
  return add(0, { hours: H || 0, minutes: M || 0, seconds: S || 0 }).valueOf();
}

function createDuration(duration, unit = "milliseconds") {
  if (!isString(duration) && !isArray(duration) && !isNumber(duration)) return new TypeError("Invalid duration");

  if (!isString(unit)) return TypeError("Invalid unit: expected a string");

  if (isString(duration)) {
    if (/\-{0,1}(?:\d{1,}|\d{1,}\.\d{1,})[a-zA-Z]{1}$/g.test(duration)) {
      return parseISODuration(duration);
    }
    if (/\d{1,2}\:\d{1,2}(?:(?:\:\d{1,2}$)|$)/.test(duration)) {
      return durationFromString(duration);
    }
    return 0;
  }

  if (isArray(duration)) {
    if (isEmptyArray(duration)) return new RangeError("Invalid duration: Empty duration array");

    if (!isValidDateArray(duration, validateDate)) return new RangeError("Invalid Date: duration array contains non Date value(s)");

    return durationFromDate(duration);
  }

  return parseNumberDuration(duration, unit);
}

module.exports = createDuration;
