"use strict";

const formatters = {
  month: {
    abbreviated: [
      "Jan.",
      "Feb.",
      "März",
      "Apr.",
      "Mai",
      "uni",
      "Juli",
      "Aug.",
      "Sept.",
      "Okt.",
      "Nov.",
      "Dez.",
    ],
    wide: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  },

  day: {
    abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
    wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    narrow: ["S", "M", "D", "M", "D", "F", "S"],
  },

  era: {
    wide: ["vor Christus", " nach Christus"],
    abbreviated: ["v. Chr.", " n. Chr."],
    narrow: ["v. C.", " n. C."],
  },

  quarter: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
  },

  dayPeriod: {
    abbreviated: {
      am: "am",
      pm: "pm",
      noon: "mittag",
      midnight: "mitternacht",
      afternoon: "nachm.",
      night: "nacht",
      morning: "morgen",
      evening: "abend",
      morning2: "vorm.",
    },
    wide: {
      am: "am",
      pm: "pm",
      noon: "mittag",
      midnight: "mitternacht",
      afternoon: "nachmittag",
      night: "nacht",
      morning: "morgen",
      evening: "abend",
      morning2: "vormittag",
    },
    narrow: {
      am: "a",
      pm: "p",
      noon: "m",
      midnight: "mitternacht",
      afternoon: "nachmittags",
      night: "nachts",
      morning: "morgens",
      evening: "abends",
      morning2: "vormittags",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "am",
      pm: "pm",
      noon: "mittag",
      midnight: "mitternacht",
      afternoon: "nachm.",
      night: "nacht",
      morning: "morgen",
      evening: "abend",
      morning2: "vorm.",
    },
    wide: {
      am: "am",
      pm: "pm",
      noon: "mittag",
      midnight: "mitternacht",
      afternoon: "nachmittags",
      night: "nachts",
      morning: "morgens",
      evening: "abends",
      morning2: "vormittags",
    },

    narrow: {
      am: "a",
      pm: "p",
      noon: "mittag",
      midnight: "mitternacht",
      afternoon: "nachmittags",
      night: "nachts",
      morning: "morgens",
      evening: "abends",
      morning2: "vormittags",
    },
  },

  dateFormat: {
    full: "EEEE, d. MMMM yyyy",
    long: "d. MMMM yyyy",
    short: "dd.MM.yy",
    medium: "dd.MM.yyyy",
    strftime: "%A, %e. %B %Y",
    strftimeShort: "%e.%m.%Y",
  },

  timeFormat: {
    full: "HH:mm:ss zzzz",
    medium: "HH:mm:ss",
    long: "HH:mm:ss zzzz",
    short: "HH:mm",
    strftime: "%H:%M:%S %Z",
    strftimeShort: "%H:%M",
  },

  dateTimeFormat: {
    full: "EEEE, d. MMMM yyyy [um] HH:mm:ss zzzz",
    medium: "dd.MM.yyyy, HH:mm:ss",
    long: "d. MMMM yyyy [um] HH:mm:ss zzzz",
    short: "dd.MM.yy, HH:mm",
    strftime: "%A, %e. %B %Y um %H:%M:%S %Z",
    strftimeShort: "%e.%m.%Y, %H:%M",
  },

  weekStarts: 1,
  firstDay: 4,
};

/**
 * @param {String} token
 */
function localise(token) {
  return formatters[token];
}

module.exports = localise;
