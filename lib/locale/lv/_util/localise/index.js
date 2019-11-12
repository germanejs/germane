"use strict";

const formatters = {
  month: {
    abbreviated: [
      " janv.",
      " febr.",
      " marts",
      "apr.",
      "maijs",
      "jūn.",
      "jūl.",
      "aug.",
      "sept.",
      "okt.",
      "nov.",
      "dec.",
    ],
    wide: [
      "janvāris",
      "februāris",
      "marts",
      "aprīlis",
      "maijs",
      "jūnijs",
      "jūlijs",
      "augusts",
      "septembris",
      "oktobris",
      "novembris",
      "decembris",
    ],
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  },

  day: {
    abbreviated: ["svētd.", "pirmd.", "otrd.", "trešd.", "ceturtd.", "piektd.", "sestd."],
    wide: [
      "svētdiena",
      "pirmdiena",
      "otrdiena",
      "trešdiena",
      "ceturtdiena",
      "piektdiena",
      "sestdiena",
    ],
    short: ["Sv", "Pi", "Ot", "Tr", "Ce", "Pi", "Se"],
    narrow: ["S", "P", "O", "T", "C", "P", "S"],
  },

  era: {
    wide: ["pirms mūsu ēras", "mūsu ērā"],
    abbreviated: ["p.m.ē.", "m.ē."],
    narrow: ["p.m.ē.", "m.ē."],
  },

  quarter: {
    narrow: ["1.", "2.", "3.", "4."],
    abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."],
    wide: ["1. ceturksnis", "2. ceturksnis", "3. ceturksnis", "4. ceturksnis"],
  },

  dayPeriod: {
    abbreviated: {
      am: "priekšp.",
      pm: "pēcp.",
      noon: "pulksten",
      midnight: "pusnakts",
      afternoon: "pēcpusdiena",
      night: "nakts",
      morning: "rīts",
      evening: "vakarā",
    },
    wide: {
      am: "priekšp.",
      pm: "pēcp.",
      noon: "pulksten",
      midnight: "pusnakts",
      afternoon: "pēcpusdiena",
      night: "nakts",
      morning: "rīts",
      evening: "vakarā",
    },
    narrow: {
      am: "priekšp.",
      pm: "pēcp.",
      noon: "pulksten",
      midnight: "pusnaktī",
      afternoon: "pēcpusdienā",
      night: "naktī",
      morning: "no rīta",
      evening: "vakarā",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "priekšp.",
      pm: "pēcp.",
      noon: "pulksten",
      midnight: "pusnakts",
      afternoon: "pēcpusdiena",
      night: "nakts",
      morning: "rīts",
      evening: "vakarā",
    },
    wide: {
      am: "priekšp.",
      pm: "pēcp.",
      noon: "pulksten",
      midnight: "pusnaktī",
      afternoon: "pēcpusdienā",
      night: "naktī",
      morning: "no rīta",
      evening: "vakarā",
    },

    narrow: {
      am: "priekšp.",
      pm: "pēcp.",
      noon: "pulksten",
      midnight: "pusnaktī",
      afternoon: "pēcpusdienā",
      night: "naktī",
      morning: "no rīta",
      evening: "vakarā",
    },
  },

  dateFormat: {
    full: "EEEE, yyyy. [gada] d. MMMM",
    long: "yyyy. [gada] d. MMMM",
    short: "dd.MM.yy",
    medium: "yyyy. [gada] d. MMM",
    strftime: "%A, %Y. [gada] %e. %B",
    strftimeShort: "%d.%m.%Y",
  },

  timeFormat: {
    full: "HH:mm:ss zzzz",
    medium: "HH:mm:ss",
    long: "HH:mm:ss",
    short: "HH:mm",
    strftime: "%H:%M:%S %Z",
    strftimeShort: "%H:%M",
  },

  dateTimeFormat: {
    full: "EEEE, yyyy. [gada] d. MMMM HH:mm:ss zzzz",
    medium: "yyyy. [gada] d. MMM HH:mm:ss",
    long: "yyyy. [gada] d. MMMM HH:mm:ss",
    short: "dd.MM.yy HH:mm",
    strftime: "%A, %Y. [gada] %e. %B %H:%M:%S %Z",
    strftimeShort: "%d.%m.%Y %H:%M",
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
