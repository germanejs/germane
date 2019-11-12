"use strict";

const relativeTimeFormat = {
  yesterday: "[Lana ní] T",
  nextDay: "[Ọ̀la ní] T",
  sameDay: "[Lònì ní] T",
  sameElse: "P",
  justNow: "ní bayi",
  lastWeek: "eeee [to kọjá ní] T",
  sameWeek: "eeee [to n bọ ní] T",
};

// eslint-disable-next-line no-unused-vars
function formatRelative(token, _date, _basedate, _relativedate) {
  return relativeTimeFormat[token];
}

module.exports = formatRelative;
