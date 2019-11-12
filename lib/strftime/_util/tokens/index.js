"use strict";

const parseFormat = require("../../../_util/format/parseFormat");

function tokens(date, locale) {
  const format = parseFormat(date, locale);
  const year = format.year;
  const quarter = format.quarter;
  const month = format.month;
  const day = format.day;
  const weekday = format.weekDay;
  const week = format.week;
  const hour = format.hour;
  const minute = format.minute;
  const second = format.second;
  const millisecond = format.millisecond;
  const period = format.period;
  const zone = format.timezone;
  const iso = format.iso;
  const timestamp = format.timestamp;

  const pattern = {
    // weekday
    "%a": weekday.abbreviated,
    "%A": weekday.wide,
    "%w": weekday.locale.numeric.oneDigit,
    "%wo": weekday.locale.ordinal,

    // day
    "%d": day.numeric.twoDigits,
    "%e": day.numeric.oneDigit,
    "%do": day.ordinal,
    "%j": day.dayOfYear,
    "%jo": day.dayOfYearOrdinal,

    // months
    "%b": month.abbreviated,
    "%B": month.wide,
    "%m": month.numeric.twoDigits,
    "%mo": month.ordinal,
    "%h": month.abbreviated,

    // years
    "%y": year.commonYear.twoDigits,
    "%Y": year.commonYear.long,
    "%C": year.commonYear.century,

    // zone
    "%Z": zone.prefixedBasic,
    "%z": zone.offsetBasic,

    // minute
    "%M": minute.numeric.twoDigits,

    // second
    "%S": second.numeric.twoDigits,
    "%f": millisecond.numeric.millisecond,
    "%s": timestamp.numeric.millisecond,

    // hour
    "%H": hour.numeric.hour0to23.twoDigits,
    "%l": hour.numeric.hour12.oneDigit,
    "%I": hour.numeric.hour12.twoDigits,
    "%k": hour.numeric.hour0to23.oneDigit,

    // period
    "%p": period.meridiem.wide,
    "%P": period.meridiem.abbreviated,

    // iso
    "%W": iso.isoweek.numeric.twoDigits,
    "%u": iso.isoWeekDay.numeric.oneDigit,
    "%v": iso.isoWeekDay.numeric.twoDigits,
    "%G": iso.isoYear.long,
    "%V": iso.isoweek.numeric.twoDigits,
    "%g": iso.isoYear.twoDigits,

    // week
    "%U": week.numeric.twoDigits,

    // quarter
    "%Q": quarter.numeric.twoDigits,
    "%Qo": locale.ordinal(quarter.numeric.oneDigit),
  };

  return pattern;
}

module.exports = tokens;
