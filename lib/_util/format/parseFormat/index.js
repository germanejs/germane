/* eslint-disable no-nested-ternary */
/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview handles date parsing and formatting using a locale.
 */

"use strict";

const dayOfYear = require("../../evaluations/dayOfYear");
const { findQuarter } = require("../../evaluations/findQuarter");
const {
  floor, ceil, divmod, trunc,
} = require("../../evaluations/roundingMethods");
const isLeapYear = require("../../validations/isLeapYear");
const { getTotalISODays } = require("../../evaluations/isoDate");
const padInt = require("../../evaluations/padInt");
const dayOfWeekInMonth = require("./../_util/dayOfWeekInMonth");

/**
 *
 * @param {Number} offset timezone offset in minutes
 * @summary Parses the timezone from a given offset.
 */
function getGMT(offset) {
  const [hour, minute] = divmod(Math.abs(offset), 60);
  const sign = offset <= 0 ? "+" : "-";
  const padHour = padInt(hour, "padStart", 2, "0");
  const padMinute = padInt(minute, "padStart", 2, "0");
  return { padHour, padMinute, sign };
}

/**
 *
 * @param {Date} date Date object
 * @description these function parse a date and returns all date related values.
 */
function format(date, locale) {
  const units = {
    year: date.getFullYear(),
    month: date.getMonth(),
    dayOfMonth: date.getDate(),
    dayOfWeek: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
    timezoneOffset: getGMT(date.getTimezoneOffset()),
    offsetInMinutes: date.getTimezoneOffset() + 0,
    timestamp: date.getTime(),
  };
  const ordinal = dayOfYear(units.year, units.month + 1, units.dayOfMonth);
  const quarterValue = findQuarter(ordinal, units.year).quarter;
  const y = floor(units.year % 100) % 28;
  const C = floor(units.year / 100) % 4;
  const c = (y + floor((y - 2) / 4) + 5 * C - 1) % 7;
  const correction = c > 3 ? c - 7 : c;

  const week = ceil(ordinal / 7);
  const isoPrevTotal = getTotalISODays(units.year - 1) / 7;
  const isoTotal = getTotalISODays(units.year) / 7;
  const isoWeek = ceil((ordinal + correction) / 7);
  // eslint-disable-next-line no-nested-ternary
  const weekOfYear = week === 0 ? (isLeapYear(units.year) ? 53 : 52) : week;

  const isoWeekNumer = isoWeek === 0 ? isoPrevTotal : isoWeek > isoTotal ? isoTotal : isoWeek;
  const eraValue = units.year >= 1 ? 1 : 0;
  const isoYear = isoWeek === 0 ? units.year - 1 : isoWeek > isoTotal ? units.year + 1 : units.year;
  const isoDayOfWeek = units.dayOfWeek || 7;
  // eslint-disable-next-line max-len
  const dayPeriodValue = locale.dayPeriod(
    units.hour,
    units.minute,
    units.second,
    units.millisecond,
  );

  const hour12 = units.hour % 12 === 0 ? 12 : units.hour % 12;
  const hour11 = units.hour % 12;
  const timezone = units.timezoneOffset;
  const offsetBasic = timezone.sign + timezone.padHour + timezone.padMinute;
  const prefixedBasic = "UTC" + timezone.sign + timezone.padHour + timezone.padMinute;
  const prefixedBasicorZ = units.offsetInMinutes === 0
    ? "Z"
    : "UTC" + timezone.sign + timezone.padHour + timezone.padMinute;
  const offsetBasicOrZ = units.offsetInMinutes === 0 ? "Z" : timezone.sign + timezone.padHour + timezone.padMinute;

  const prefixedExtended = "UTC" + timezone.sign + timezone.padHour + ":" + timezone.padMinute;
  const offsetExtended = timezone.sign + timezone.padHour + ":" + timezone.padMinute;
  const prefixedExtendedOrZ = units.offsetInMinutes === 0
    ? "Z"
    : "UTC" + timezone.sign + timezone.padHour + ":" + timezone.padMinute;
  const offsetExtendedorZ = units.offsetInMinutes === 0 ? "Z" : timezone.sign + timezone.padHour + ":" + timezone.padMinute;

  const offsetWithoutMinute = timezone.sign + timezone.padHour;
  const offsetWithoutMinuteOrZ = units.offsetInMinutes === 0 ? "Z" : timezone.sign + timezone.padHour;
  const prefixedWithoutMinute = "UTC" + timezone.sign + timezone.padHour;

  const era = locale.localise("era");
  const month = locale.localise("month");
  const quarter = locale.localise("quarter");
  const day = locale.localise("day");
  const dayPeriod = locale.localise("dayPeriod");
  const dayPeriodFormatted = locale.localise("dayPeriodFormatted");
  const weekStarts = locale.localise("weekStarts");
  const localeWeekDay = (weekStarts + units.dayOfWeek) % 7;
  const formatted = {
    era: {
      abbreviated: era.abbreviated[eraValue],
      wide: era.wide[eraValue],
      narrow: era.narrow[eraValue],
    },
    year: {
      commonYear: {
        oneDigit: String(units.year % 100),
        twoDigits: padInt(units.year % 100, "padStart", 2, "0"),
        threeDigits: padInt(units.year % 100, "padStart", 3, "0"),
        long: padInt(units.year, "padStart", 4, "0"),
        paddedLong: padInt(units.year, "padStart", ("" + units.year).length + 1, "0"),
        century: String(trunc(units.year / 100)),
      },
      weekYear: {
        oneDigit: String(units.year % 100),
        twoDigits: padInt(units.year % 100, "padStart", 2, "0"),
        threeDigits: padInt(units.year % 100, "padStart", 3, "0"),
        long: padInt(units.year, "padStart", 4, "0"),
      },
    },

    quarter: {
      numeric: {
        oneDigit: String(quarterValue),
        twoDigits: padInt(quarterValue, "padStart", 2, "0"),
      },
      abbreviated: quarter.abbreviated[quarterValue - 1],
      wide: quarter.wide[quarterValue - 1],
      narrow: quarter.narrow[quarterValue - 1],
    },

    month: {
      numeric: {
        oneDigit: String(units.month + 1),
        twoDigits: padInt(units.month + 1, "padStart", 2, "0"),
      },
      abbreviated: month.abbreviated[units.month],
      wide: month.wide[units.month],
      narrow: month.narrow[units.month],
      ordinal: locale.ordinal(units.month + 1),
    },

    week: {
      numeric: {
        oneDigit: String(weekOfYear),
        twoDigits: padInt(weekOfYear, "padStart", 2, "0"),
      },
      ordinal: locale.ordinal(weekOfYear),
    },

    day: {
      numeric: {
        oneDigit: String(units.dayOfMonth),
        twoDigits: padInt(units.dayOfMonth, "padStart", 2, "0"),
      },
      dayOfYear: padInt(ordinal, "padStart", 3, "0"),
      dayOfYearOrdinal: locale.ordinal(ordinal),
      dayOfWeekInMonth: String(dayOfWeekInMonth(date)),
      dayOfWeekInMonthOrdinal: locale.ordinal(dayOfWeekInMonth(date)),
      ordinal: locale.ordinal(units.dayOfMonth),
    },

    weekDay: {
      numeric: {
        oneDigit: String(units.dayOfWeek),
        twoDigits: padInt(units.dayOfWeek, "padStart", 2, "0"),
      },
      abbreviated: day.abbreviated[units.dayOfWeek],
      wide: day.wide[units.dayOfWeek],
      short: day.short[units.dayOfWeek],
      narrow: day.narrow[units.dayOfWeek],
      ordinal: locale.ordinal(units.dayOfWeek),
      locale: {
        numeric: {
          oneDigit: String(localeWeekDay || 7),
          twoDigits: padInt(localeWeekDay || 7, "padStart", 2, "0"),
        },
        abbreviated: day.abbreviated[localeWeekDay],
        wide: day.wide[localeWeekDay],
        short: day.short[localeWeekDay],
        narrow: day.narrow[localeWeekDay],
        ordinal: locale.ordinal(localeWeekDay || 7),
      },
    },

    period: {
      meridiem: {
        abbreviated: dayPeriod.abbreviated[dayPeriodValue.meridiem],
        wide: dayPeriod.wide[dayPeriodValue.meridiem],
        narrow: dayPeriod.narrow[dayPeriodValue.meridiem],
      },
      standalone: {
        abbreviated: dayPeriod.abbreviated[dayPeriodValue.period],
        wide: dayPeriod.wide[dayPeriodValue.period],
        narrow: dayPeriod.narrow[dayPeriodValue.period],
      },
      formatting: {
        abbreviated: dayPeriodFormatted.abbreviated[dayPeriodValue.period],
        wide: dayPeriodFormatted.wide[dayPeriodValue.period],
        narrow: dayPeriodFormatted.narrow[dayPeriodValue.period],
      },
    },
    hour: {
      numeric: {
        hour12: {
          oneDigit: String(hour12),
          twoDigits: padInt(hour12, "padStart", 2, "0"),
        },
        hour0to23: {
          oneDigit: String(units.hour),
          twoDigits: padInt(units.hour, "padStart", 2, "0"),
        },
        hour11: {
          oneDigit: String(hour11),
          twoDigits: padInt(hour11, "padStart", 2, "0"),
        },
        hour1to24: {
          oneDigit: String(units.hour + 1),
          twoDigits: padInt(units.hour + 1, "padStart", 2, "0"),
        },
      },
    },
    minute: {
      numeric: {
        oneDigit: String(units.minute),
        twoDigits: padInt(units.minute, "padStart", 2, "0"),
      },
    },
    second: {
      numeric: {
        oneDigit: String(units.second),
        twoDigits: padInt(units.second, "padStart", 2, "0"),
      },
    },
    millisecond: {
      numeric: {
        millisecond: String(units.millisecond),
        decisecond: String(trunc(units.millisecond / 10)),
        centisecond: String(trunc(units.millisecond / 100)),
        // eslint-disable-next-line max-len
        millisecondsInDay: String(
          (units.hour * 3600 + units.minute * 60 + units.second) * 1000 + units.millisecond,
        ),
      },
    },

    timezone: {
      offsetBasic,
      prefixedBasic,
      prefixedBasicorZ,
      offsetBasicOrZ,
      prefixedExtended,
      offsetExtended,
      prefixedExtendedOrZ,
      offsetExtendedorZ,
      offsetWithoutMinute,
      offsetWithoutMinuteOrZ,
      prefixedWithoutMinute,
    },
    timestamp: {
      numeric: {
        second: String(trunc(units.timestamp / 1000)),
        millisecond: String(units.timestamp),
      },
    },
    iso: {
      isoYear: {
        oneDigit: String(isoYear % 100),
        twoDigits: padInt(isoYear % 100, "padStart", 2, "0"),
        threeDigits: padInt(isoYear % 100, "padStart", 3, "0"),
        long: padInt(isoYear, "padStart", 4, "0"),
      },
      isoweek: {
        numeric: {
          twoDigits: padInt(isoWeekNumer, "padStart", 2, "0"),
        },
        ordinal: locale.ordinal(isoWeekNumer),
      },
      isoWeekDay: {
        numeric: {
          oneDigit: String(isoDayOfWeek),
          twoDigits: padInt(isoDayOfWeek, "padStart", 2, "0"),
        },
        abbreviated: day.abbreviated[isoDayOfWeek % 7],
        wide: day.wide[isoDayOfWeek % 7],
        short: day.short[isoDayOfWeek % 7],
        narrow: day.narrow[isoDayOfWeek % 7],
        ordinal: locale.ordinal(isoDayOfWeek),
      },
    },
  };
  return formatted;
}

module.exports = format;
