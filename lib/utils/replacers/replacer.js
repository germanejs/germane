/**
 * @author Simeon Akpanudo
 * @fileoverview Function within uses specified regex and object to format or replace a given string
 */

"use strict";

/**
 * @param {string} formatString string containing the formats to be use
 * @param {Object} replacement key value pair of {replacer: replacement}
 * @param {RegExp} regex regular expression to match format
 * @returns {string} returns a string with the formatted replacements if there is a format,
 *  else it returns the string
 * @name replacer
 * @throws {Invalid format string} throws an error when the str parameter contains an invalid format
 * @example replacer("YY %d", {"YY": "Bar", "%d": "foo"},
 *  /^YY|%[a-zA-Z]/, ["YY", "YYYY", "%d", "%a"])
 */
function replacer(formatString, replacement, regex) {
  const newReplacement = { ...replacement };
  let newStr = formatString;
  const newArray = newStr.match(regex);
  if (newArray === null || newArray === undefined || !newArray.length) return formatString;
  for (let i = 0; i <= newArray.length - 1; i += 1) {
    const nRegex = RegExp(`(?<![a-zA-Z0-9])${newArray[i]}(?![a-zA-Z0-9])`);
    newStr = newStr.replace(nRegex, newReplacement[newArray[i]]);
  }
  return newStr;
}

module.exports = { replacer };
