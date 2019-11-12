/* eslint-disable no-nested-ternary */
/**
 * @author Simeon Akpanudo
 * @fileoverview parses iso string and returns an object
 */

"use strict";

const { isTrue, validateISO } = require("../../validations/validatePropTypes");
const {
  ISOBasicFormat,
  ISOExpanded,
  ISOWeekNumberingYear,
  ISOWeekDate,
  ordinalDate,
  rfcDate,
  ASPDate,
} = require("../../evaluations/ISODate");
/**
 *
 * @param {String} input Date string.
 */

function parseISO(value) {
  const validate = validateISO(value);
  return isTrue(validate.isExpanded)
    ? ISOExpanded(value)
    : isTrue(validate.isBasic)
      ? ISOBasicFormat(value)
      : isTrue(validate.isRFC)
        ? rfcDate(value)
        : isTrue(validate.isASP)
          ? ASPDate(value)
          : isTrue(validate.isOrdinal)
            ? ordinalDate(value)
            : isTrue(validate.isWeekDate)
              ? ISOWeekDate(value)
              : isTrue(validate.isWeekNumberingYear)
                ? ISOWeekNumberingYear(value)
                : new RangeError("Invalid Date");
}

module.exports = parseISO;
