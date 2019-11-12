/* eslint-disable func-names */
/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
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
  // console.log(newReplacement[newArray[1]]);
  if (newArray === null || newArray === undefined || !newArray.length) return formatString;

  const value = new Map();
  newArray.map(function (a, b) {
    value.set(b, newReplacement[a]);
    return 1;
  });

  Array(newArray.length)
    .fill(0)
    .map(function (val, index) {
      const c = RegExp(`(?<![a-zA-Z0-9])${newArray[index]}(?![a-zA-Z0-9])`);

      newStr = newStr.replace(c, `{${index}}`);
      return 1;
    })
    .map(function (val, index) {
      newStr = newStr.replace(`{${index}}`, value.get(index));
      return 1;
    });
  return newStr;
}

module.exports = replacer;
