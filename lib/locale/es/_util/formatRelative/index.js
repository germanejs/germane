"use strict";

const relativeTimeFormat = {
  yesterday: "[ayer a la] T",
  nextDay: "[mañana a la] T",
  sameDay: "[hoy a la] T",
  sameElse: "P",
  justNow: "justo ahora",
  lastWeek: "'el' eeee [pasado a la] T",
  sameWeek: "eeee [a la] T",
};
const relativeTimeFormatPlural = {
  yesterday: "[ayer a las] T",
  nextDay: "[mañana a las] T",
  sameDay: "[hoy a las] T",
  sameElse: "P",
  justNow: "justo ahora",
  lastWeek: "'el' eeee [pasado a las] T",
  sameWeek: "eeee [a las] T",
};

// eslint-disable-next-line no-unused-vars
function formatRelative(token, date, _basedate, _relativedate) {
  if (date.getHours() !== 1) {
    return relativeTimeFormatPlural[token];
  }
  return relativeTimeFormat[token];
}

module.exports = formatRelative;
