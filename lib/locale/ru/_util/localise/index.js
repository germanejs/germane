"use strict";

const formatters = {
  month: {
    abbreviated: [
      "янв.",
      "февр.",
      "мар.",
      "апр.",
      "мая",
      "июн.",
      "июл.",
      "авг.",
      "сент.",
      "окт.",
      "нояб.",
      "дек.",
    ],
    wide: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
    narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  },

  day: {
    abbreviated: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    short: ["В", "П", "В", "С", "Ч", "П", "С"],
    narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  },

  era: {
    wide: ["до Рождества Христова", "от Рождества Христова"],
    abbreviated: ["до н. э.", "н. э."],
    narrow: ["до н.э.", "н.э."],
  },

  quarter: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
    wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"],
  },

  dayPeriod: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "noon",
      midnight: "mid",
      afternoon: "afternoon",
      night: "night",
      morning: "morning",
      evening: "evening",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "noon",
      midnight: "midnight",
      afternoon: "afternoon",
      night: "night",
      morning: "morning",
      evening: "evening",
    },
    narrow: {
      am: "a",
      pm: "p",
      noon: "n",
      midnight: "md",
      afternoon: "in the afternoon",
      night: "at night",
      morning: "in the morning",
      evening: "in the evening",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "noon",
      midnight: "mid",
      afternoon: "afternoon",
      night: "night",
      morning: "morning",
      evening: "evening",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "noon",
      midnight: "in the midnight",
      afternoon: "in the afternoon",
      night: "at night",
      morning: "in the morning",
      evening: "in the evening",
    },

    narrow: {
      am: "a",
      pm: "p",
      noon: "n",
      midnight: "md",
      afternoon: "in the afternoon",
      night: "at night",
      morning: "in the morning",
      evening: "in the evening",
    },
  },

  dateFormat: {
    full: "EEEE, d MMMM yyyy 'г.'",
    long: "d MMMM yyyy 'г.'",
    short: "dd.MM.yyyy",
    medium: "d MMM yyyy 'г.'",
    strftime: "%A, %e %B %Y r.",
    strftimeShort: "%d.%m.%Y",
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
    full: "EEEE, d MMMM yyyy 'г.', HH:mm:ss zzzz",
    medium: "d MMM yyyy 'г.', HH:mm:ss",
    long: "d MMMM yyyy 'г.', HH:mm:ss zzzz",
    short: "dd.MM.yyyy, HH:mm",
    strftime: "%A, %e %B %Y r., %H:%M:%S %Z",
    strftimeShort: "%d.%m.%Y, %H:%M",
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
