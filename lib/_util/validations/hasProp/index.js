/**
 * @author Simeon Akpanudo
 * @fileoverview utility func/mod to check if an object contains a prop
 */

"use strict";

/**
 *
 * @param {*} x Object
 * @param {*} y Property;
 * @returns {boolean} true or false if property y exists in object x
 */
function hasProp(x, y) {
  if (!x) return false;
  if (x && Object.keys(x).length < 1) return false;
  return Object.prototype.hasOwnProperty.call(x, y);
}
module.exports = hasProp;
