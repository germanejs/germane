/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview Returns the parsing booleans flags for formatting relative time
 */

"use strict";

const inRangeOf = require("../../../_util/validations/inRangeOf");
const isSameDate = require("../../../_util/evaluations/sameDate");
const isYesterday = require("../../../isYesterday");
const isNextDay = require("../../../isNextDay");

function relativeFlags(base, relative) {
  const last = inRangeOf(
    relative.getTime(),
    // prettier-ignore
    new Date(`${base.getFullYear()}-${base.getMonth() + 1}-${base.getDate()} 00:00:00.000Z`).getTime() - 6 * 86400000,
    base.getTime(),
  );

  const sameWeek = inRangeOf(
    relative.getTime(),
    base.getTime(),
    // prettier-ignore
    new Date(`${base.getFullYear()}-${base.getMonth() + 1}-${base.getDate()} 23:59:59.999Z`).getTime() + 6 * 86400000,
  );
  // eslint-disable-next-line max-len
  const notInADayRange = !isSameDate(base, relative) && !isNextDay(base, relative) && !isYesterday(base, relative);
  const self = {
    sameWeek: notInADayRange && sameWeek,
    lastWeek: notInADayRange && last,
    sameElse: notInADayRange && !last && !sameWeek,
    sameDay: isSameDate(base, relative),
    nextDay: isNextDay(base, relative) && !isSameDate(base, relative),
    yesterday: isYesterday(base, relative) && !isSameDate(base, relative),
  };
  return self;
}

module.exports = relativeFlags;
