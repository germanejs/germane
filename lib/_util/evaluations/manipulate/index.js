/**
 * @author Simeon Akpanudo
 * @fileoverview Functions within are created to work with the add and subtract date functions.
 */

"use strict";

const { getDaysInYear } = require("../daysInYear");
const { floor } = require("../roundingMethods");
const epoch = require("../epoch");
/**
 *
 * @param {any} current {year, month, date, hour, minute, second}
 * @param {Number} months
 * @returns {Number}
 * returns the number of milliseconds from the first date and the new date with the added month
 */
function manipulate(
  current = {
    year: 1970,
    month: 1,
    date: 1,
    hour: 0,
    minute: 0,
    second: 0,
  },
  months,
  type = "sub",
) {
  let startYear = current.year;
  const startEpoch = epoch(...Object.values(current));
  let startMonth = current.month;
  let year;
  let month;
  let day;
  let end;

  day = current.date;

  if (type === "sub") {
    const m = Math.abs(floor(months % 12) - (startMonth + 12));

    year = startYear - floor(months / 12) - floor((floor(months % 12) + 12 - startMonth) / 12);

    month = m > 12 ? m % 12 : m;
    const checkDay = (day === 30 || day === 31) && month === 2 ? getDaysInYear(year)[month] : day;
    end = epoch(year, month, checkDay, current.hour, current.minute, current.second);
  } else if (type === "add") {
    month = Math.abs(
      ((months % 12) + startMonth) % 12 === 0 ? 12 : ((months % 12) + startMonth) % 12,
    );
    year = startYear
      + floor(months / 12)
      + (floor(months % 12) + startMonth > 12 ? floor((floor(months % 12) + startMonth) / 12) : 0);

    const checkDay = (day === 30 || day === 31) && month === 2 ? getDaysInYear(year)[month] : day;

    /*

  month = return 0 if addedmonth % 12 = 0| else |abs((addedmonth mod 12) + startingMonth) mod 12

  years = startingYear + floor(addedmonth / 12) + sum of addedmonth mod 12,
  and the startingmonth, if sum is greater than 12, divide by 12 else return 0.

  example: years = 2019 + floor(23 / 12) + { add the following only if its sum is greater than 12
  [being that 12th month / 12 will equal 0, end an invalid JS date]
  (((23 % 12) + 3[startingmonth]) / 12) }
  checkDay = ending of months defer according to its month getfullyear method solves the problem

*/
    end = epoch(year, month, checkDay, current.hour, current.minute, current.second);
  }
  return type === "sub" ? startEpoch - end : end - startEpoch;
}

module.exports = manipulate;
