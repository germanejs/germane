/* eslint-disable no-nested-ternary */

"use strict";

const { isZero } = require("../../../../_util/validations/validatePropTypes");
const inRangeOf = require("../../../../_util/validations/inRangeOf");

function dayPeriod(hour, min, sec, ms) {
  // 00:00 midnight
  const midnight = isZero(hour) && isZero(min) && isZero(sec);
  // 12:00 noon
  const noon = hour === 12 && isZero(min) && isZero(sec);

  const timeToms = (hour * 3600 + min * 60 + sec) * 1000 + ms;
  // 06:00:00 - 11:59:59.999 morning

  const morningDurationStart = (6 * 3600 + 0 * 60 + 0) * 1000;
  const morningDurationEnd = (11 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const morning = inRangeOf(timeToms, morningDurationStart, morningDurationEnd);

  // 12:00:00.001 - 17:59:59.999 afternoon

  const afternoonDurationStart = (12 * 3600 + 0 * 60 + 0) * 1000 + 1;
  const afternoonDurationEnd = (17 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const afternoon = inRangeOf(timeToms, afternoonDurationStart, afternoonDurationEnd);

  // 18:00:00 - 23:59:59.999 evening

  const eveningDurationStart = (18 * 3600 + 0 * 60 + 0) * 1000;
  const eveningDurationEnd = (23 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const evening = inRangeOf(timeToms, eveningDurationStart, eveningDurationEnd);

  // 00:00:00.001 - 05:59:59.999 night.
  const nightDurationStart = (0 * 3600 + 0 * 60 + 0) * 1000 + 1;
  const nightDurationEnd = (5 * 3600 + 59 * 60 + 59) * 1000 + 999;
  const night = inRangeOf(timeToms, nightDurationStart, nightDurationEnd);

  const meridiem = hour > 11 ? "pm" : "am";

  // prettier-ignore
  const period = midnight ? "midnight" : night ? "night" : morning ? "morning" : noon ? "noon" : afternoon ? "afternoon" : evening ? "evening" : meridiem;

  return { meridiem, period };
}

module.exports = dayPeriod;
