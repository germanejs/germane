
"use strict";

/**
 * @param {number} number
 * @returns {string} The argument (number) and its ordinal;
 * @description An ordinal is the position of a number,
 * the last two letters of the number when spelt in words in used to provide the ordinal;
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 */
function ordinalParse(number) {
  const numToStr = String(number);
  const lastIndex = numToStr.slice(numToStr.length - 2, numToStr.length);
  const nth = RegExp(/^(?:[1]+[0-9])|(?:[4-9]$)|(?:[0-9]+[4-9|0])|(?:[0]$)/);
  const nonNth = RegExp(/^(?:[1-3]$)|(?:[2-9|0]+[1-3])/);
  const nd = RegExp(/^(?:[2]$)|(?:[2-9|0]+[2])/);
  const st = RegExp(/^(?:[1]$)|(?:[2-9|0]+[1])/);
  const rd = RegExp(/^(?:[3]$)|(?:[2-9|0]+[3])/);

  const withOrdinal = numToStr + "%s";

  // eslint-disable-next-line func-names
  return withOrdinal.replace("%s", function () {
    if (lastIndex.match(nth)) {
      return "e";
    }
    if (lastIndex.match(nonNth)) {
      if (lastIndex.match(nd)) return "e";
      if (lastIndex.match(rd)) return "e";
      if (lastIndex.match(st)) return "er";
    }
    return numToStr;
  });
}

module.exports = ordinalParse;
