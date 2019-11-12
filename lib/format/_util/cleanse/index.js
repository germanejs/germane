/* eslint-disable func-names */

"use strict";

/**
 *
 * @param {String} formatString
 * @param {String} dirtyString
 * @summary cleanses a string which is not intended to be formatted.
 * @example
 * "EEEE of [e] in YYYY" //=> "EEEE of e in YYYY"
 */
function main(formatString, dirtyString) {
  let string = formatString;
  let formatted = dirtyString || "";
  // matches words in brackets.
  const m1 = /\[([^[]*)\]/g;

  // // replaces 'week' to "week" and 'week's' to "week's";
  // let replaced = string.replace(/^'|(?<=\s|\d)'(?!')|'(?=\s|$)/g, '"');

  const multiple = (string.match(m1) || []).map(function (a) {
    return a.split(/\[|\]/).join("");
  });
  Array(multiple.length)
    .fill(0)
    .map(function (a, b) {
      formatted = formatted.replace(/_multi_/, multiple[b]);
      return 1;
    });
  return formatted.replace(/"|''/g, "'");
}
module.exports = main;
