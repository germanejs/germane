/**
 * @author Simeon Akpanudo
 * @fileoverview
 */

"use strict";

const pluralise = require("./pluralise");

/**
 *
 * @param {*} obj Object with date related integer values.
 * @param {Array} aligner Array of positional aligners(string).. determines hour object is aligned
 * @returns {String} returns a string of correctly align date types.
 */
function strictReturn(obj, aligner) {
  const newObj = { ...obj };
  const newAligner = aligner.filter(a => {
    if (newObj[a] > 0) return a;
    // should never return 👇
    return 0;
  });

  const formatString = newAligner
    .map(a => a.padStart(a.length + 1, "%"))
    .join(" ")
    .trim();

  let newStr = formatString;

  newStr = newAligner.reduce((a, b) => {
    let x = a;
    const nRegex = RegExp(`%${b}`, "g");

    x = x.replace(nRegex, () => {
      if (newAligner.indexOf(b) !== newAligner.length - 1) {
        return newObj[b] + " " + pluralise(b.substring(0, b.length - 1), newObj[b]) + ",";
      }
      return newObj[b] + " " + pluralise(b.substring(0, b.length - 1), newObj[b]);
    });
    return x;
  }, newStr);
  return newStr;
}

module.exports = strictReturn;
