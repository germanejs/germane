"use strict";

const formatters = {
  month: {
    abbreviated: [
      "ene.",
      "feb.",
      "mar.",
      "abr.",
      "may.",
      "jun.",
      "jul.",
      "ago.",
      "sept.",
      "oct.",
      "nov.",
      "dic.",
    ],
    wide: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
    narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  },

  day: {
    abbreviated: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
    wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    short: ["do", "lu", "ma", "mi", "ju", "vi", "sa"],
    narrow: ["D", "L", "M", "X", "J", "V", "S"],
  },

  era: {
    wide: ["antes de Cristo", "después de Cristo"],
    abbreviated: ["a. C.", "d. C."],
    narrow: ["a. C.", "d. C."],
  },

  quarter: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1.er trimestre", "2.º trimestre", "3.er trimestre", "4.º trimestre"],
  },

  dayPeriod: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "md",
      midnight: "mn",
      afternoon: "tarde",
      night: "noche",
      morning: "mañana",
      evening: "tarde",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "medodía",
      midnight: "medianoche",
      afternoon: "tarde",
      night: "noche",
      morning: "mañana",
      evening: "tarde",
    },
    narrow: {
      am: "a",
      pm: "p",
      noon: "mediodía",
      midnight: "medianoche",
      afternoon: "en la tarde",
      night: "en la noche",
      morning: "en la mañana",
      evening: "en la tarde",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "mediodía",
      midnight: "medianoche",
      afternoon: "tarde",
      night: "noche",
      morning: "mañana",
      evening: "tarde",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "mediodía",
      midnight: "en la medianoche",
      afternoon: "en la tarde",
      night: "en la noche",
      morning: "en la mañana",
      evening: "en la tarde",
    },

    narrow: {
      am: "a",
      pm: "p",
      noon: "n",
      midnight: "md",
      afternoon: "en la tarde",
      night: "en la noche",
      morning: "en la mañana",
      evening: "en la tarde",
    },
  },

  dateFormat: {
    full: "EEEE, d [de] MMMM [de] yyyy",
    long: "d [de] MMMM [de] yyyy",
    short: "M/d/yy",
    medium: "d MMM yyyy",
    strftime: "%A, %e de %B de %Y",
    strftimeShort: "%m/%e/%y",
  },

  timeFormat: {
    full: "H:mm:ss (zzzz)",
    medium: "H:mm:ss",
    long: "H:mm:ss zzzz",
    short: "H:mm",
    strftime: "%H:%M:%S (%Z)",
    strftimeShort: "%H:%M",
  },

  dateTimeFormat: {
    full: "EEEE, d [de] MMMM [de] yyyy, H:mm:ss (zzzz)",
    medium: "d MMM yyyy H:mm:ss",
    long: "d [de] MMMM [de] yyyy, H:mm:ss zzzz",
    short: "M/d/yy H:mm",
    strftime: "%A, %e de %B de %Y, %H:%M:%S (%Z)",
    strftimeShort: "%m/%e/%y %H:%",
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
