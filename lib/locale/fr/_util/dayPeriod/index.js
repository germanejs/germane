/* eslint-disable no-nested-ternary */

"use strict";

const { isZero } = require("../../../../_util/validations/validatePropTypes");
const inRangeOf = require("../../../../_util/validations/inRangeOf");

function dayPeriod(hour, min, sec, ms) {
  // 00:00 midnight
  const midnight = isZero(hour) && isZero(min) && isZero(sec);
  // 12:00 noon
  const noon = hour === 12 && isZero(min) && isZero(sec);

  const timeToMiliseconds = (hour * 3600 + min * 60 + sec) * 1000 + ms;
  // 04:00:00 - 11:59:59.999 morning

  const morningDurationStart = (4 * 3600 + 0 * 60 + 0) * 1000;
  const morningDurationEnd = (11 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const morning = inRangeOf(timeToMiliseconds, morningDurationStart, morningDurationEnd);

  // 12:00:00.001 - 17:59:59.999 afternoon

  const afternoonDurationStart = (12 * 3600 + 0 * 60 + 0) * 1000 + 1;
  const afternoonDurationEnd = (17 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const afternoon = inRangeOf(timeToMiliseconds, afternoonDurationStart, afternoonDurationEnd);

  // 18:00:00 - 20:59:59.999 evening

  const eveningDurationStart = (18 * 3600 + 0 * 60 + 0) * 1000;
  const eveningDurationEnd = (20 * 3600 + 59 * 60 + 59) * 1000 + 999;

  const evening = inRangeOf(timeToMiliseconds, eveningDurationStart, eveningDurationEnd);

  // 21:00:00 - 23:59:59.999 night 1.
  const night1DurationStart = (21 * 3600 + 0 * 60 + 0) * 1000;
  const night1DurationEnd = (23 * 3600 + 59 * 60 + 59) * 1000 + 999;
  const night1 = inRangeOf(timeToMiliseconds, night1DurationStart, night1DurationEnd);

  // 00:00:00.001 - 03:59:59.999 night 2.
  const night2DurationStart = (0 * 3600 + 0 * 60 + 0) * 1000 + 1;
  const night2DurationEnd = (3 * 3600 + 59 * 60 + 59) * 1000 + 999;
  const night2 = inRangeOf(timeToMiliseconds, night2DurationStart, night2DurationEnd);

  const meridiem = hour > 11 ? "pm" : "am";

  // prettier-ignore
  const period = midnight ? "midnight" : night1 ? "night" : night2 ? "night" : morning ? "morning" : noon ? "noon" : afternoon ? "afternoon" : evening ? "evening" : meridiem;

  return { meridiem, period };
}

module.exports = dayPeriod;
