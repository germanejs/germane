"use strict";

const formatters = {
  month: {
    abbreviated: [
      "gen",
      "feb",
      "mar",
      "apr",
      "mag",
      "giu",
      "lug",
      "ago",
      "set",
      "ott",
      "nov",
      "dic",
    ],
    wide: [
      "gennaio",
      "febbraio",
      "marzo",
      "aprile",
      "maggio",
      "giugno",
      "luglio",
      "agosto",
      "settembre",
      "ottobre",
      "novembre",
      "dicembre",
    ],
    narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
  },

  day: {
    abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    wide: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
    short: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
    narrow: ["D", "L", "M", "M", "G", "V", "S"],
  },

  era: {
    wide: ["avanti Cristo", "dopo Cristo"],
    abbreviated: ["a.C.", "d.C."],
    narrow: ["aC", "dC"],
  },

  quarter: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"],
  },

  dayPeriod: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "mezzogiorno",
      midnight: "mezzanotte",
      afternoon: "pomeriggio",
      night: "notte",
      morning: "mattina",
      evening: "sera",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "mezzogiorno",
      midnight: "mezzanotte",
      afternoon: "pomeriggio",
      night: "notte",
      morning: "mattina",
      evening: "sera",
    },
    narrow: {
      am: "a",
      pm: "p",
      noon: "mezzogiorno",
      midnight: "mezzanotte",
      afternoon: "nel pomeriggio",
      night: "la notte",
      morning: "in la mattina",
      evening: "in la sera",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "mezzogiorno",
      midnight: "mezzanotte",
      afternoon: "pomeriggio",
      night: "notte",
      morning: "mattina",
      evening: "sera",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "in la mezzogiorno",
      midnight: "mezzanotte",
      afternoon: "nel pomeriggio",
      night: "la notte",
      morning: "in la mattina",
      evening: "in la sera",
    },

    narrow: {
      am: "a",
      pm: "p",
      noon: "mezzogiorno",
      midnight: "mezzanotte",
      afternoon: "nel pomeriggio",
      night: "la notte",
      morning: "in la mattina",
      evening: "in la sera",
    },
  },

  dateFormat: {
    full: "eeee d MMMM yyyy",
    long: "d MMMM yyyy",
    short: "dd/MM/yy",
    medium: "d MMM yyyy",
    strftime: "%A %e %B %Y",
    strftimeShort: "%d/%m/%y",
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
    full: "eeee d MMMM yyyy HH:mm:ss zzzz",
    medium: "d MMM yyyy, HH:mm:ss",
    long: "d MMMM yyyy HH:mm:ss",
    short: "dd/MM/yy, HH:mm",
    strftime: "%A %e %B %Y %H:%M:%S %Z",
    strftimeShort: "%d/%m/%y %H:%M",
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
