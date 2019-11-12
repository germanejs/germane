const isLeapYear = require("../../validations/isLeapYear");

function getDaysInYear(year) {
  return [null, 31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

function daysInPrevMonths(year, month) {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    .slice(0, month - 1)
    .reduce((prev, current) => {
      let anon = current;
      anon += prev;
      return anon;
    }, 0);
}

module.exports = {
  daysInPrevMonths,
  getDaysInYear,
};
