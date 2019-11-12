"use strict";

const relativeTimeFormat = {
  yesterday: "[Gisteren om] T",
  nextDay: "[Morgen om] T",
  sameDay: "[Vandaag om] T",
  sameElse: "P",
  justNow: "Net nou",
  lastWeek: "[Afgelopen] eeee [om] T",
  sameWeek: "eeee [om] T",
};

// eslint-disable-next-line no-unused-vars
function formatRelative(token, _date, _basedate, _relativedate) {
  return relativeTimeFormat[token];
}

module.exports = formatRelative;
