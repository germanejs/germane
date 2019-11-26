/* eslint-disable no-useless-escape */
/**
 * @author Simeon Akpanudo
 * @fileoverview function parse an iso duration string
 */

"use strict";

const add = require("../../../add");

/**
 * finds an iso duration when given a type and a string of iso duration
 * @param {String} str
 * @param {String} type
 */
const findDuration = (str, type) => {
  const dur = (str || "").match(/\-{0,1}(?:\d{1,}|\d{1,}\.\d{1,})[a-zA-Z]{1}/g) || [];
  const find = dur.find(a => new RegExp(`\-{0,1}(?:\\d{1,}|\\d{1,}\.\\d{1,})${type}{1}`).test(a));
  return find !== undefined ? Number(find.split(/[a-zA-Z]/, 1)[0]) : 0;
};

/**
 * Creates a duration from an iso duration string.
 * @param {String} duration iso duration string ("P12Y8M13DT23H13M56S")
 * @returns {Number}
 */
function durationFromISO(duration) {
  const [period, time] = duration.split("T");

  const Y = findDuration(period, "Y");
  const M = findDuration(period, "M");
  const D = findDuration(period, "D");
  const H = findDuration(time, "H");
  const Mi = findDuration(time, "M");
  const S = findDuration(time, "S");
  // prettier-ignore
  const data = add(0, {
    years: Y, months: M, days: D, hours: H, minutes: Mi, seconds: S,
  });
  return data.valueOf();
}

module.exports = durationFromISO;
