"use strict";

const formatters = {
  month: {
    abbreviated: [
      "jan.",
      "fev.",
      "mar.",
      "abr.",
      "mai.",
      "jun.",
      "jul.",
      "ago.",
      "set.",
      "out.",
      "nov.",
      "dez.",
    ],
    wide: [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ],
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  },

  day: {
    abbreviated: ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sáb."],
    wide: [
      "domingo",
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
      "sábado",
    ],
    short: ["Do", "2ª", "3ª", "4ª", "5ª", "6ª", "Sá"],
    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
  },

  era: {
    wide: ["antes de Cristo", "depois de Cristo"],
    abbreviated: ["a.C.", "d.C."],
    narrow: ["a.C.", "d.C."],
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
      noon: "meio-dia",
      midnight: "meia-noite",
      afternoon: "tarde",
      night: "madrugada",
      morning: "manhã",
      evening: "noite",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "meio-dia",
      midnight: "meia-noite",
      afternoon: "tarde",
      night: "madrugada",
      morning: "manhã",
      evening: "noite",
    },
    narrow: {
      am: "a",
      pm: "p",
      noon: "meio-dia",
      midnight: "meia-noite",
      afternoon: "na tarde",
      night: "na madrugada",
      morning: "na manhã",
      evening: "na noite",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "meio-dia",
      midnight: "meia-noite",
      afternoon: "tarde",
      night: "madrugada",
      morning: "manhã",
      evening: "noite",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "meio-dia",
      midnight: "meia-noite",
      afternoon: "na tarde",
      night: "na madrugada",
      morning: "na manhã",
      evening: "na noite",
    },

    narrow: {
      am: "a",
      pm: "p",
      noon: "meio-dia",
      midnight: "meia-noite",
      afternoon: "na tarde",
      night: "na madrugada",
      morning: "na manhã",
      evening: "na noite",
    },
  },

  dateFormat: {
    full: "EEEE, d [de] MMMM [de] yyyy",
    long: "d [de] MMMM [de] yyyy",
    short: "dd/MM/yyyy",
    medium: "d [de] MMM [de] yyyy",
    strftime: "%A, %e de %B de %Y",
    strftimeShort: "%d/%m/%Y",
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
    full: "EEEE, d [de] MMMM [de] yyyy HH:mm:ss zzzz",
    medium: "d [de] MMM [de] yyyy HH:mm:ss",
    long: "d [de] MMMM [de] yyyy HH:mm:ss zzzz",
    short: "dd/MM/yyyy HH:mm",
    strftime: "%A, %e de %B de %Y %H:%M:%S %Z",
    strftimeShort: "%d/%m/%Y %H:%M",
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
