"use strict";

const relativeTimeFormat = {
  yesterday: "[Yesterday at] T",
  nextDay: "[Tomorrow at] T",
  sameDay: "[Today at] T",
  sameElse: "P",
  justNow: "Just now",
  lastWeek: "[Last] eeee [at] T",
  sameWeek: "eeee [at] T",
};

// eslint-disable-next-line no-unused-vars
function formatRelative(token, _date, _basedate, _relativedate) {
  return relativeTimeFormat[token];
}

module.exports = formatRelative;
