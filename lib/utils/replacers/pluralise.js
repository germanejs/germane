/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 * @param {String} word Word to pluralise
 * @param {Number} number Number of word occurrence;
 * @returns {String} returns pluralised word or word if occurrence is less than || equals 1;
 */
function pluralise(word, number) {
  let plural;

  if (number > 1) {
    if (word.match(/ry$/)) plural = word.substring(0, word.length - 1) + "%";
    else plural = word + "%";
  } else {
    plural = word;
  }

  const last = word.substring(word.length - 1, word.length);
  const lastTwo = word.substring(word.length - 2, word.length);

  if (plural.match(/[%]$/)) {
    if (last === "x" || last === "o" || last === "s" || (last === "y" && !lastTwo == "ry")) return plural.replace("%", "es");
    if (lastTwo === "ry") return plural.replace("%", "ies");
    return plural.replace("%", "s");
  } return word;
}
module.exports = pluralise;
