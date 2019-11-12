"use strict";

const formatters = {
  month: {
    abbreviated: [
      "jan.",
      "feb.",
      "mrt.",
      "apr.",
      "mei",
      "jun.",
      "jul.",
      "aug.",
      "sep.",
      "okt.",
      "nov.",
      "dec.",
    ],
    wide: [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december",
    ],
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  },

  day: {
    abbreviated: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    wide: ["zondag ", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    short: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
    narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
  },

  era: {
    wide: ["voor Christus", "na Christus"],
    abbreviated: ["v.Chr.", "n.Chr."],
    narrow: ["v.C.", "n.C."],
  },

  quarter: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["K1", "K2", "K3", "K4"],
    wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"],
  },

  dayPeriod: {
    abbreviated: {
      am: "a.m.",
      pm: "p.m.",
      noon: "het middaguur",
      midnight: "middernacht",
      afternoon: "middag",
      night: "nacht",
      morning: "ochtend",
      evening: "avond",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      noon: "het middaguur",
      midnight: "middernacht",
      afternoon: "middag",
      night: "nacht",
      morning: "ochtend",
      evening: "avond",
    },
    narrow: {
      am: "a",
      pm: "p",
      noon: "het middaguur",
      midnight: "middernacht",
      afternoon: "'s middags",
      night: "'s nachts",
      morning: "'s ochtends",
      evening: "'s avonds",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "a.m.",
      pm: "p.m.",
      noon: "het middaguur",
      midnight: "middernacht",
      afternoon: "middag",
      night: "nacht",
      morning: "ochtend",
      evening: "avond",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      noon: "het middaguur",
      midnight: "middernacht",
      afternoon: "'s middags",
      night: "'s nachts",
      morning: "'s ochtends",
      evening: "'s avonds",
    },

    narrow: {
      am: "a",
      pm: "p",
      noon: "het middaguur",
      midnight: "middernacht",
      afternoon: "'s middags",
      night: "'s nachts",
      morning: "'s ochtends",
      evening: "'s avonds",
    },
  },

  dateFormat: {
    full: "EEEE d MMMM yyyy",
    long: "d MMMM yyyy",
    short: "dd-MM-yyyy",
    medium: "d MMM yyyy",
    strftime: "%A %d %B %Y",
    strftimeShort: "%d-%m-%Y",
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
    full: "EEEE d MMMM yyyy [om] HH:mm:ss zzzz",
    medium: "d MMM yyyy HH:mm:ss",
    long: "d MMMM yyyy [om] HH:mm:ss zzzz",
    short: "dd-MM-yyyy HH:mm",
    strftime: "%A %d %B %Y om %H:%M:%S %Z",
    strftimeShort: "%d-%m-%Y %H:%M",
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
