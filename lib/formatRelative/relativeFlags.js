/**
 * @author Simeon Akpanudo
 * @fileoverview Returns the parsing booleans flags for formatting relative time
 */

"use strict";

const inRangeOf = require("../utils/validations/inRangeOf");
const isSameDate = require("../utils/evaluations/isSameDate");
const isYesterday = require("../isYesterday");
const isNextDay = require("../isNextDay");

function relativeFlags(current, relative) {
  const next = inRangeOf(relative.getTime(), current.getTime(), current.getTime() + 7 * 86400000);
  const last = inRangeOf(relative.getTime(), current.getTime() - 8 * 86400000, current.getTime());

  const notInADayRange = !isSameDate(current, relative)
    && !isNextDay(current, relative)
    && !isYesterday(current, relative);
  const yearRange = current.getFullYear() === relative.getFullYear();
  const self = {
    yearRange: notInADayRange && yearRange && !next && !last,
    last: notInADayRange && last,
    next: notInADayRange && next,
    isPast: notInADayRange && current.getTime() > relative.getTime(),
    isFuture: notInADayRange && relative.getTime() > current.getTime(),
    isSameDate: isSameDate(current, relative),
    isNextDay: isNextDay(current, relative) && !isSameDate(current, relative),
    isYesterday: isYesterday(current, relative) && !isSameDate(current, relative),
  };
  return self;
}

module.exports = relativeFlags;
