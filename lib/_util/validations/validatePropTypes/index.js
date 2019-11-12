/* eslint-disable func-names */
/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview function argument and property type validation
 */

"use strict";

const hasProp = require("./../hasProp");

function isBool(argument) {
  const valid = argument !== undefined
    && argument !== null
    && typeof argument === "boolean"
    && Object.prototype.toString.call(argument) === "[object Boolean]";
  if (!valid) return false;
  return true;
}

function isString(argument) {
  const valid = argument !== undefined
    && argument !== null
    && typeof argument === "string"
    && Object.prototype.toString.call(argument) === "[object String]";
  if (!valid) return false;
  return true;
}

function isNumber(argument) {
  const valid = argument !== undefined
    && argument !== null
    && typeof argument === "number"
    && Object.prototype.toString.call(argument) === "[object Number]"
    && !isNaN(argument);
  if (!valid) return false;
  return true;
}

function isArray(argument) {
  const valid = argument !== undefined
    && argument !== null
    && Object.prototype.toString.call(argument) === "[object Array]"
    && argument instanceof Array;
  if (!valid) return false;
  return true;
}

function isObject(argument) {
  const valid = Object.prototype.toString.call(argument) === "[object Object]"
    && argument !== null
    && typeof argument === "object"
    && Object.prototype.toString.call(argument) !== "[object Array]";
  if (!valid) return false;
  return true;
}

function isDate(argument) {
  const valid = argument !== undefined
    && argument !== null
    && typeof argument === "object"
    && Object.prototype.toString.call(argument) === "[object Date]";
  if (!valid) return false;
  return true;
}

function isDateOrNumber(argument) {
  const valid = (argument !== undefined
      && argument !== null
      && (typeof argument === "object"
        && Object.prototype.toString.call(argument) === "[object Date]"))
    || (typeof argument === "number"
      && Object.prototype.toString.call(argument) === "[object Number]"
      && !isNaN(argument))
    // eslint-disable-next-line no-use-before-define
    || isGermane(argument);

  return valid;
}

function isFunc(argument) {
  const valid = argument !== undefined
    && argument !== null
    && typeof argument === "function"
    && Object.prototype.toString.call(argument) === "[object Function]";
  if (!valid) return false;
  return true;
}

function isGermane(argument) {
  // eslint-disable-next-line max-len
  if (argument === null || argument === undefined || Object.keys(argument).length === 0) return false;
  const numProps = [
    "getTime",
    "getLocalTime",
    "getMonth",
    "getHours",
    "getMinutes",
    "getSeconds",
    "getTimezoneOffset",
    "getFullYear",
    "getMilliseconds",
    "getDate",
    "getDay",
    "getWeekDay",
    "getOrdinal",
    "getWeek",
    "getUTCHours",
    "getUTCMinutes",
    "getUTCSeconds",
    "getUTCFullYear",
    "getUTCMonth",
    "getUTCMilliseconds",
    "getUTCDate",
    "getUTCDay",
  ];
  const strProps = ["getTimezoneName", "toString", "getUTCOffset", "getMonthName", "toISOString"];

  const reduceProp = numProps.reduce(
    (prev, current) => hasProp(argument, current)
        && (typeof argument[current] === "function"
          ? typeof argument[current]() === "number" && !isNaN(argument[current]())
          : false),

    "getTime",
  )
    && strProps.reduce(
      (prev, current) => hasProp(argument, current)
        && (typeof argument[current] === "function" ? typeof argument[current]() === "string" : false),
      "getTimezoneName",
    );

  return argument instanceof Object && reduceProp && argument.name === "Germane";
}

function isTrue(value) {
  return typeof value === "boolean" && value === true;
}

function validateISO(value) {
  // 1970-01-01T00:00:00.000Z
  const expanded = /\b(?:\d{4}-\d{2}-\d{2}(?:[T]{1}|[\s]{1})(?:\d{2}:\d{2}|\d{2}:\d{2}:\d{2})(?:\.(?:\d{1,}(?:[Z]|$))|(?:(?<=\d{1,})[Z]{1}|$)))/i;
  // 1970-01-01T00:00:00+0100
  const expandedWithOffset = /\b(?:\d{4}-\d{2}-\d{2}(?:[T]{1}|[\s]{1})(?:\d{2}:\d{2}|\d{2}:\d{2}:\d{2})(?:[+|-]\d{4}$|[+|-]\d{2}:\d{2}$|[+|-]\d{2}$|$))/i;
  // 19700101T000000Z
  const basic = /\b\d{4}\d{2}\d{2}$|\b\d{4}\d{2}$|\b(?:\d{4}\d{2}\d{2}(?:[T]{1})(?:\d{2}$|\d{2}\d{2}$|\d{2}\d{2}\d{2}(?:[Z]|$)$))/i;
  // 1970-01
  const YYYYDDD = /\b\d{4}-\d{2,3}$|\b\d{4}\d{2,3}$/;
  // 1970-W09
  const week = /\b\d{4}-W\d{2}$|\b\d{4}W\d{2}$/i;

  // 1970-W12-1
  const YYYYWwwD = /\b\d{4}-W\d{2}-\d{1}$|\b\d{4}W\d{2}\d{1}$/i;
  // 1970-01-01
  const YYYYMMDD = /\b\d{4}-\d{2}-\d{2}$/;
  // 1970-01
  const YYYYMM = /\b\d{4}-\d{2}$/;
  // /Date(1313407613400)/
  const ASP = /^(?:\/Date\([-]{0,1}\d{1,}\)\/)$/;
  // Fri, 21 Nov 1997 09:55:06 -0600
  const rfc = /\w{3},{0,1}\s\d{1,2}\s\w{3}\s\d{4}\s\d{2}:\d{2}:\d{2}(?:\s[+|-]\d{4})/i;

  const valid = {
    isExpanded:
      expanded.test(value)
      || expandedWithOffset.test(value)
      || YYYYMMDD.test(value)
      || YYYYMM.test(value),
    isBasic: basic.test(value),
    isASP: ASP.test(value),
    isRFC: rfc.test(value),
    isWeekNumberingYear: YYYYWwwD.test(value),
    isWeekDate: week.test(value),
    isOrdinal: YYYYDDD.test(value),
    nonExpandedOrBasic:
      ASP.test(value)
      || YYYYMM.test(value)
      || YYYYMMDD.test(value)
      || YYYYDDD.test(value)
      || week.test(value)
      || YYYYWwwD.test(value),
  };

  return valid;
}

function isZero(argument) {
  return typeof argument === "number" && !isNaN(argument) && argument === 0;
}

function isEmptyArray(array) {
  return array.length === 0;
}

function isValidDateArray(array, fn) {
  return (
    isArray(array)
    && array.reduce((prev, current) => {
      let x = prev;
      x = prev && fn(current);
      return x;
    }, true)
  );
}

function isLocale(option) {
  if (!hasProp(option, "locale")) return false;
  const value = option.locale;
  // prettier-ignore
  const l = isObject(value) && hasProp(value, "code") && hasProp(value, "localise") && hasProp(value, "formatRelative") && hasProp(value, "relativeDistance") && hasProp(value, "ordinal") && hasProp(value, "dayPeriod");
  if (!l) return false;

  const localise = value.localise;
  // prettier-ignore
  // eslint-disable-next-line max-len
  if (!isFunc(localise) || !isFunc(value.relativeDistance) || !isFunc(value.ordinal) || !isFunc(value.dayPeriod) || !isFunc(value.formatRelative) || !isString(value.code)) return false;

  // const aNW = ["month", "day", "quarter", "dayPeriod", "dayPeriodFormatted", "era"];
  // const dateTime = ["dateFormat", "timeFormat", "dateTimeFormat"];

  // const formattersProps1 = aNW.reduce(function (prev, current) {
  //   const m = formatters[current];
  //   return (
  //     hasProp(formatters, current)
  //     && (hasProp(m, "abbreviated")
  //       && (m.abbreviated !== null && typeof m.abbreviated === "object")
  //       && (hasProp(m, "narrow") && (m.narrow !== null && typeof m.narrow === "object"))
  //       && (hasProp(m, "wide") && (m.wide !== null && typeof m.wide === "object")))
  //   );
  // }, false);
  // const formattersProps2 = dateTime.reduce(function (prev, current) {
  //   const m = formatters[current];
  //   return (
  //     hasProp(formatters, current)
  //     && (hasProp(m, "full") && hasProp(m, "long") && hasProp(m, "medium") && hasProp(m, "long"))
  //   );
  // }, false);
  // if (!formattersProps1 || !formattersProps2) return false;
  return true;
}

module.exports = {
  isGermane,
  isLocale,
  isString,
  isArray,
  isDate,
  isDateOrNumber,
  isFunc,
  isNumber,
  isBool,
  isObject,
  validateISO,
  isTrue,
  isZero,
  isEmptyArray,
  isValidDateArray,
};
