"use strict";

const parseFormat = require("../../../_util/format/parseFormat");
function tokens(date, locale) {
  const format = parseFormat(date, locale);
  const era = format.era;
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
    G: era.abbreviated,
    GG: era.abbreviated,
    GGG: era.abbreviated,
    GGGG: era.wide,
    GGGGG: era.narrow,
    // Year
    y: year.commonYear.oneDigit,
    yy: year.commonYear.twoDigits,
    yyy: year.commonYear.threeDigits,
    yyyy: year.commonYear.long,
    yyyyy: year.commonYear.paddedLong,
    Y: year.weekYear.oneDigit,
    YY: year.weekYear.twoDigits,
    YYY: year.weekYear.threeDigits,
    YYYY: year.weekYear.long,

    // Quarter
    Q: quarter.numeric.oneDigit,
    QQ: quarter.numeric.twoDigits,
    QQQ: quarter.abbreviated,
    QQQQ: quarter.wide,
    QQQQQ: quarter.narrow,
    Qo: locale.ordinal(quarter.numeric.oneDigit),
    q: quarter.numeric.oneDigit,
    qq: quarter.numeric.twoDigits,
    qqq: quarter.abbreviated,
    qqqq: quarter.wide,
    qqqqq: quarter.narrow,
    qo: locale.ordinal(quarter.numeric.oneDigit),

    // Month
    M: month.numeric.oneDigit,
    MM: month.numeric.twoDigits,
    MMM: month.abbreviated,
    MMMM: month.wide,
    MMMMM: month.narrow,
    Mo: month.ordinal,
    L: month.numeric.oneDigit,
    LL: month.numeric.twoDigits,
    LLL: month.abbreviated,
    LLLL: month.wide,
    LLLLL: month.narrow,
    Lo: month.ordinal,

    // week
    w: week.numeric.oneDigit,
    ww: week.numeric.twoDigits,
    wo: week.ordinal,

    // day
    d: day.numeric.oneDigit,
    dd: day.numeric.twoDigits,
    do: day.ordinal,
    D: day.dayOfYear,
    DD: day.dayOfYear,
    DDD: day.dayOfYear,
    Do: day.dayOfYearOrdinal,
    F: day.dayOfWeekInMonth,
    Fo: day.dayOfWeekInMonthOrdinal,

    // week day
    E: weekday.abbreviated,
    EE: weekday.abbreviated,
    EEE: weekday.abbreviated,
    EEEE: weekday.wide,
    EEEEE: weekday.narrow,
    EEEEEE: weekday.short,
    e: weekday.locale.numeric.oneDigit,
    ee: weekday.locale.numeric.twoDigits,
    eee: weekday.locale.abbreviated,
    eeee: weekday.locale.wide,
    eeeee: weekday.locale.narrow,
    eeeeee: weekday.locale.short,
    c: weekday.numeric.oneDigit,
    cc: weekday.numeric.oneDigit,
    ccc: weekday.abbreviated,
    cccc: weekday.wide,
    ccccc: weekday.narrow,
    cccccc: weekday.short,

    // period
    a: period.meridiem.abbreviated,
    aa: period.meridiem.abbreviated,
    aaa: period.meridiem.abbreviated,
    aaaa: period.meridiem.wide,
    aaaaa: period.meridiem.narrow,
    b: period.standalone.abbreviated,
    bb: period.standalone.abbreviated,
    bbb: period.standalone.abbreviated,
    bbbb: period.standalone.wide,
    bbbbb: period.standalone.narrow,
    B: period.formatting.abbreviated,
    BB: period.formatting.abbreviated,
    BBB: period.formatting.abbreviated,
    BBBB: period.formatting.wide,
    BBBBB: period.formatting.narrow,

    // hour

    h: hour.numeric.hour12.oneDigit,
    hh: hour.numeric.hour12.twoDigits,
    H: hour.numeric.hour0to23.oneDigit,
    HH: hour.numeric.hour0to23.twoDigits,
    K: hour.numeric.hour11.oneDigit,
    KK: hour.numeric.hour11.twoDigits,
    k: hour.numeric.hour1to24.oneDigit,
    kk: hour.numeric.hour1to24.twoDigits,

    // minute
    m: minute.numeric.oneDigit,
    mm: minute.numeric.twoDigits,
    // second

    s: second.numeric.oneDigit,
    ss: second.numeric.twoDigits,

    // millisecond

    S: millisecond.numeric.millisecond,
    SS: millisecond.numeric.centisecond,
    SSS: millisecond.numeric.decisecond,
    A: millisecond.numeric.millisecondsInDay,
    f: timestamp.numeric.second,
    ff: timestamp.numeric.millisecond,

    // zone
    Z: zone.offsetBasic,
    ZZ: zone.offsetBasic,
    ZZZ: zone.offsetBasic,
    ZZZZ: zone.prefixedExtended,
    ZZZZZ: zone.prefixedExtendedOrZ,
    z: zone.prefixedWithoutMinute,
    zz: zone.prefixedWithoutMinute,
    zzz: zone.prefixedWithoutMinute,
    zzzz: zone.prefixedExtended,
    x: zone.offsetWithoutMinute,
    xx: zone.prefixedBasic,
    xxx: zone.prefixedBasicorZ,
    xxxx: zone.offsetBasic,
    xxxxx: zone.offsetExtended,
    X: zone.offsetWithoutMinuteOrZ,
    XX: zone.offsetBasicOrZ,
    XXX: zone.offsetExtendedorZ,
    XXXX: zone.offsetExtendedorZ,
    XXXXX: zone.offsetBasicOrZ,
    O: zone.offsetWithoutMinute,
    OOOO: zone.prefixedExtended,
    // iso
    R: iso.isoYear.oneDigit,
    RR: iso.isoYear.twoDigits,
    RRR: iso.isoYear.threeDigits,
    RRRR: iso.isoYear.long,

    I: iso.isoweek.numeric.twoDigits,
    II: iso.isoweek.ordinal,

    // iso week day
    i: iso.isoWeekDay.numeric.oneDigit,
    ii: iso.isoWeekDay.numeric.twoDigits,
    io: iso.isoWeekDay.ordinal,
    iii: iso.isoWeekDay.abbreviated,
    iiii: iso.isoWeekDay.wide,
    iiiii: iso.isoWeekDay.narrow,
  };

  return pattern;
}

module.exports = tokens;
