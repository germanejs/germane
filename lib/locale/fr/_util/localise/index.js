const formatters = {
  month: {
    abbreviated: [
      "janv.",
      "févr.",
      "mars",
      "avr.",
      "mai",
      "juin",
      "juil.",
      "août",
      "sept.",
      "oct.",
      "nov.",
      "déc.",
    ],
    wide: [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ],
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  },

  day: {
    abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    narrow: ["D", "L", "M", "M", "J", "V", "S"],
    short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
  },

  era: {
    wide: ["avant Jésus-Christ", "après Jésus-Christ"],
    abbreviated: ["av. J.-C.", "ap. J.-C."],
    narrow: ["av. J.-C.", "ap. J.-C."],
  },

  quarter: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"],
  },

  dayPeriod: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "midi",
      midnight: "minuit",
      afternoon: "ap. m",
      night: "nuit",
      morning: "mat.",
      evening: "soir",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "midi",
      midnight: "minuit",
      afternoon: "après-midi",
      night: "nuit",
      morning: "matin",
      evening: "soir",
    },
    narrow: {
      am: "a",
      pm: "p",
      noon: "midi",
      midnight: "minuit",
      afternoon: "dans l'après-midi",
      night: "la nuit",
      morning: "le matin",
      evening: "le soir",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "midi",
      midnight: "minuit",
      afternoon: "après-midi",
      night: "nuit",
      morning: "matin",
      evening: "soir",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "midi",
      midnight: "à minuit",
      afternoon: "dans l'après-midi",
      night: "la nuit",
      morning: "le matin",
      evening: "le soir",
    },

    narrow: {
      am: "a",
      pm: "p",
      noon: "midi",
      midnight: "minuit",
      afternoon: "dans l'après-midi",
      night: "la nuit",
      morning: "le matin",
      evening: "le soir",
    },
  },

  dateFormat: {
    full: "EEEE d MMMM yyyy",
    medium: "d MMM yyyy",
    short: "dd/MM/yyyy",
    long: "d MMMM yyyy",
    strftime: "%A %e %B %Y",
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
    full: "EEEE d MMMM yyyy [à] HH:mm:ss zzzz",
    long: "d MMMM yyyy [à] HH:mm:ss zzzz",
    medium: "d MMM yyyy [à] HH:mm:ss",
    short: "dd/MM/yyyy [à] HH:mm",
    strftime: "%A %e %B %Y à %H:%M:%S %Z",
    strftimeShort: "%d/%m/%Y à %H:%M",
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
