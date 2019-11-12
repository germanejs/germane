"use strict";

const relativeTimeFormat = {
  yesterday: "[Gestern um] T",
  nextDay: "[Morgen um] T",
  sameDay: "[Heute um] T",
  sameElse: "P",
  justNow: "Gerade jetzt",
  lastWeek: "[Letzten] eeee [um] T",
  sameWeek: "eeee [um] T",
};

// eslint-disable-next-line no-unused-vars
function formatRelative(token, _date, _basedate, _relativedate) {
  return relativeTimeFormat[token];
}

module.exports = formatRelative;
