"use strict";

const relativeTimeFormat = {
  yesterday: "[Gister om] T",
  nextDay: "[Môre om] T",
  sameDay: "[Vandag om] T",
  sameElse: "P",
  justNow: "Nou net",
  lastWeek: "[Verlede] eeee [om] T",
  sameWeek: "eeee [om] T",
};

// eslint-disable-next-line no-unused-vars
function formatRelative(token, _date, _basedate, _relativedate) {
  return relativeTimeFormat[token];
}

module.exports = formatRelative;
