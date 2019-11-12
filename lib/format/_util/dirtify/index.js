/* eslint-disable func-names */

"use strict";

/**
 *
 * @param {String} formatString
 * @summary Inserts 'dirty' string eg: _quoted_ to the formatString to allow character escaping.
 */

function dirtify(formatString) {
  let string = formatString;
  // matches words in brackets.
  const m1 = /\[([^[]*)\]/g;

  (string.match(m1) || []).map(function (a) {
    string = string.replace(a, "_multi_");
    return 1;
  });
  return string;
}
module.exports = dirtify;
