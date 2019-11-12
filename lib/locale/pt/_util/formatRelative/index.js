"use strict";

const relativeTimeFormat = {
  yesterday: "[Ontem às] T",
  nextDay: "[Amanhã às] T",
  sameDay: "[Hoje às] T",
  sameElse: "P",
  justNow: "Só agora",
  lastWeek: "eeee [passado às] T",
  sameWeek: "eeee [às] T",
};

// eslint-disable-next-line no-unused-vars
function formatRelative(token, _date, _basedate, _relativedate) {
  return relativeTimeFormat[token];
}

module.exports = formatRelative;
