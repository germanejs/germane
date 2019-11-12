/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 * @param {Array} value an array of acceptables or values which acts as a look up
 * @param {*} search a array of things which is to be looked up on.
 * @returns {Boolean} Returns true or false. depending on whether all was found.
 */
function inArray(value, search) {
  let exist;
  if (Object.prototype.toString.call(search) !== "[object Array]") return value.includes(search);

  for (let i = 0; i <= search.length - 1; i += 1) {
    exist = value.includes(search[i]);
    if (!exist) break;
  }
  return exist;
}
module.exports = inArray;
