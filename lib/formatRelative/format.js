/**
 * @author Simeon Akpanudo
 * @fileoverview returns the relative format of two given dates not adding time.
 */

"use strict";

const getMonthWeekdayName = require("../utils/evaluations/get_month_weekday_name");

const toPriority = require("../utils/replacers/toPriority");
const evaluatedTimestamp = require("../utils/evaluations/timestamp_evaluation");
const padInt = require("../utils/evaluations/padInt");
const relativeFlags = require("./relativeFlags");
const { isZero, isDateOrNumber, isNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

function format(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const currentDate = isNumber(current) ? new Date(current) : current;
  const relativeDate = isNumber(relative) ? new Date(relative) : relative;

  const flags = relativeFlags(currentDate, relativeDate);
  if (flags.isSameDate) {
    const time = evaluatedTimestamp(currentDate.getTime() - relativeDate.getTime());
    if (isZero(time.hours) && isZero(time.minutes) && isZero(time.seconds)) return "Just now";

    const future = currentDate.getTime() > relativeDate.getTime();
    const sameDate = !future
      ? "In " + toPriority(time, ["hours", "minutes", "seconds"])
      : toPriority(time, ["hours", "minutes", "seconds"]) + " ago";
    return sameDate;
  }

  if (flags.isYesterday) return "Yesterday";
  if (flags.isNextDay) return "Tomorrow";
  if (flags.next) {
    const nextDayOfW = relativeDate.getDay();
    return (
      "Next " + getMonthWeekdayName(1, nextDayOfW === 0 ? 7 : nextDayOfW).dayName.toLowerCase()
    );
  }

  if (flags.last) {
    const lastDayOfW = relativeDate.getDay();
    return (
      "Last " + getMonthWeekdayName(1, lastDayOfW === 0 ? 7 : lastDayOfW).dayName.toLowerCase()
    );
  }

  if (flags.yearRange) {
    const dayOfW = relativeDate.getDay();
    return (
      getMonthWeekdayName(relativeDate.getMonth(), dayOfW === 0 ? 7 : dayOfW).monthNameShort
      + " "
      + relativeDate.getDate()
    );
  }

  // MM/DD/YYYY
  return (
    padInt(relativeDate.getMonth() + 1, "padStart", 2, "0")
    + "/"
    + padInt(relativeDate.getDate(), "padStart", 2, "0")
    + "/"
    + relativeDate.getFullYear()
  );
}

module.exports = format;
