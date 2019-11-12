"use strict";

const relativeTimeFormat = {
  yesterday: "[Vakar pulksten] T",
  nextDay: "[Rīt pulksten] T",
  sameDay: "[Šodien pulksten] T",
  sameElse: "P",
  justNow: "Tikko",
  lastWeek: "[Pagājušā] eeee [pulksten] T",
  sameWeek: "eeee [pulksten] T",
};

// eslint-disable-next-line no-unused-vars
function formatRelative(token, _date, _basedate, _relativedate) {
  return relativeTimeFormat[token];
}

module.exports = formatRelative;
