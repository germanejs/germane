/* eslint-disable func-names */

"use strict";

const { longDateTimePattern } = require("../regex");
const extendedFormat = require("./_util/extendedFormat");
/**
 * @param {string} string format string.
 * @param {object} locale Locale data.
 *
 * ```js
 * generateParseTokens("Today's date is PPPP") //=> locale's appropriate date.
 * ```
 */

function generateParseTokens(string, locale) {
  let newString = string;

  const extended = string.match(longDateTimePattern);

  if (extended === null) return newString;

  const prematch = extended.filter(function (x) {
    return x !== null;
  });
  const formats = extendedFormat(locale);
  // loop through string and parse it
  Array(prematch.length)
    .fill(0)
    .map(function (value, index) {
      const replacerRegex = RegExp(`(?<![a-zA-Z0-9])${prematch[index]}(?![a-zA-Z0-9])`);

      newString = newString.replace(replacerRegex, formats[prematch[index]]);
      return 1;
    });
  return newString;
}

module.exports = generateParseTokens;
