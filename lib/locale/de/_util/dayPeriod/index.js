/* eslint-disable no-nested-ternary */

"use strict";

const { isZero } = require("../../../../_util/validations/validatePropTypes");
const inRangeOf = require("../../../../_util/validations/inRangeOf");

function dayPeriod(hour, min, sec, ms) {
  // 00:00 midnight
  const midnight = isZero(hour) && isZero(min) && isZero(sec);

  const timeToms = (hour * 3600 + min * 60 + sec) * 1000 + ms;
  // 00:00:01.000 - 04:59:59.999 night

  const nightDurationStart = (0 * 3600 + 0 * 60 + 1) * 1000;
  const nightDurationEnd = (4 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const night = inRangeOf(timeToms, nightDurationStart, nightDurationEnd);

  // 18:00:00 - 23:59:59.999 evening

  const eveningDurationStart = (18 * 3600 + 0 * 60 + 0) * 1000;
  const eveningDurationEnd = (23 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const evening = inRangeOf(timeToms, eveningDurationStart, eveningDurationEnd);

  // 10:00:00 - 11:59:59.999 morning2
  const morning2DurationStart = (10 * 3600 + 0 * 60 + 0) * 1000;
  const morning2DurationEnd = (11 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const morning2 = inRangeOf(timeToms, morning2DurationStart, morning2DurationEnd);

  // 05:00:00 - 09:59:59.999 morning2
  const morning1DurationStart = (5 * 3600 + 0 * 60 + 0) * 1000;
  const morning1DurationEnd = (9 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const morning1 = inRangeOf(timeToms, morning1DurationStart, morning1DurationEnd);

  // 12:00:00 - 12:59:59.999
  const noonDurationStart = (12 * 3600 + 0 * 60 + 0) * 1000;
  const noonDurationEnd = (12 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const noon = inRangeOf(timeToms, noonDurationStart, noonDurationEnd);
  // 13:00:00.000 - 17:59:59.999 afternoon

  const afternoonDurationStart = (13 * 3600 + 0 * 60 + 0) * 1000;
  const afternoonDurationEnd = (17 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const afternoon = inRangeOf(timeToms, afternoonDurationStart, afternoonDurationEnd);

  const meridiem = hour > 11 ? "pm" : "am";

  // prettier-ignore
  const period = midnight ? "midnight" : night ? "night" : morning1 ? "morning" : morning2 ? "morning2" : noon ? "noon" : afternoon ? "afternoon" : evening ? "evening" : meridiem;

  return { meridiem, period };
}

module.exports = dayPeriod;
