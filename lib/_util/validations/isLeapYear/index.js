"use strict";

/**
 * @param {Number} year year value
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
module.exports = isLeapYear;
