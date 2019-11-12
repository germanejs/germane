/* eslint-disable func-names */

"use strict";

const { extendedPattern } = require("../regex");
const extendedFormat = require("./_util/extendedFormat");
/**
 * eg
 * MMMEd (E, MMM d)
 * ```js
 * generateParseTokens("The date was MMMEd") //=> "The date was E, MMM d"
 */

function generateParseTokens(string, locale) {
  let newString = string;

  const extended = string.match(extendedPattern);

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
