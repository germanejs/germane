/**
 * @fileoverview Module calls both parseDate and parseTime functions and returns their values.
 */

const parseDate = require("./parsers/parseDate");
const parseTime = require("./parsers/parseTime");

/**
 * @param {Date} date Date Object
 * @returns parsed date and time
 */
module.exports = function (date) {
  let parsedDate;
  let time;
  let full;
  if (typeof date === "number") {
    parsedDate = parseDate(new Date(date));
    time = parseTime(new Date(date));
    full = `${parsedDate.apprDate}, ${time.apprTime}`;
  } else {
    parsedDate = parseDate(date);
    time = parseTime(date);
    full = `${parsedDate.apprDate}, ${time.apprTime}`;
  }
  return {
    parsedDate,
    time,
    fullDateAndTime: full,
  };
};
