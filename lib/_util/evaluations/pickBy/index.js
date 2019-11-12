/**
 * @author Simeon Akpanudo
 */

"use strict";

function pickBy(array, sortOption) {
  if (sortOption === "min") {
    return array.sort((a, b) => {
      return a > b ? 1 : -1;
    })[0];
  }

  if (sortOption === "max") {
    return array.sort((a, b) => {
      return a > b ? -1 : 1;
    })[0];
  }

  return 0;
}

module.exports = pickBy;
