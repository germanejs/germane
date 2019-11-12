/**
 * @author Simeon Akpanudo
 * @fileoverview Returns true of false if or if not a date is current date. (depends on local time)
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date|Number} date date | number | timestamp
 * @name isToday
 * @returns {Boolean} Boolean value depending on whether specified date is current date
 */

function isToday(date) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");
  const nDate = new Date(date);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const dOfMonth = today.getDate();

  const possibleYear = nDate.getFullYear();
  const possibleMonth = nDate.getMonth() + 1;
  const possibleDOfMonth = nDate.getDate();

  const newToday = new Date(`${year}-${month}-${dOfMonth}`).getTime();
  const possibleToday = new Date(`${possibleYear}-${possibleMonth}-${possibleDOfMonth}`).getTime();

  return possibleToday === newToday;
}

module.exports = isToday;
