"use strict";

const relativeTimeFormat = {
  yesterday: "[Hier à ]T",
  nextDay: "[Demain à] T",
  sameDay: "[Aujourd'hui à] T",
  sameElse: "P",
  justNow: "Tout à l'heure",
  lastWeek: "eeee [dernier à] T",
  sameWeek: "eeee [prochain à] T",
};

// eslint-disable-next-line no-unused-vars
function formatRelative(token, _date, _basedate, _relativedate) {
  return relativeTimeFormat[token];
}

module.exports = formatRelative;
