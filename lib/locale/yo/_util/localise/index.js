"use strict";

const formatters = {
  month: {
    abbreviated: [
      "Ṣẹ́r",
      "Èrèl",
      "Ẹrẹ̀n",
      "Ìgb",
      "Ẹ̀bi",
      "Òkú",
      "Agẹ",
      "Ògú",
      "Owe",
      "Ọ̀wà",
      "Bél",
      "Ọ̀pẹ",
    ],
    wide: [
      "Oṣù Ṣẹ́rẹ́",
      "Oṣù Èrèlè",
      "Oṣù Ẹrẹ̀nà",
      "Oṣù Ìgbé",
      "Oṣù Ẹ̀bibi",
      "Oṣù Òkúdu",
      "Oṣù Agẹmọ",
      "Oṣù Ògún",
      "Oṣù Owewe",
      "Oṣù Ọ̀wàrà",
      "Oṣù Bélú",
      "Oṣù Ọ̀pẹ̀",
    ],
    narrow: ["S", "È", "Ẹ", "Ì", "Ẹ̀", "Ò", "A", "Ò", "O", "Ọ", "B", "Ọ̀"],
  },

  day: {
    abbreviated: ["Àìk", "Aj", "Ìsẹ́g", "Ọjọ́r", "Ọjọ́b", "Ẹt", "Àbám"],
    wide: ["Ọjọ́ Àìkú", "Ọjọ́ Ajé", "Ọjọ́ Ìsẹ́gun", "Ọjọ́rú", "Ọjọ́bọ", "Ọjọ́ Ẹtì", "Ọjọ́ Àbámẹ́ta"],
    short: ["Ài", "A", "Ì", "Ọjọ́r", "Ọjọ́b", "Ẹ", "Àb"],
    narrow: ["À", "A", "Ì", "Ọ", "Ọ", "Ẹ", "À"],
  },

  era: {
    wide: ["Saju Kristi", "Lehin Kristi"],
    abbreviated: ["BCE", "AD"],
    narrow: ["BCE", "AD"],
  },

  quarter: {
    narrow: ["kíní", "Kejì", "Kẹta", "Kẹin"],
    abbreviated: ["Ìdámẹ́rin kíní", "Ìdámẹ́rin Kejì", "Ìdámẹ́rin Kẹta", "Ìdámẹ́rin Kẹrin"],
    wide: ["Ìdámẹ́rin kíní", "Ìdámẹ́rin Kejì", "Ìdámẹ́rin Kẹta", "Ìdámẹ́rin Kẹrin"],
  },

  dayPeriod: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "ọ̀sán",
      midnight: "ọgànjọ́ òru",
      afternoon: "ọ̀sán",
      night: "alẹ",
      morning: "owurọ",
      evening: "irọlẹ",
      night2: "òru",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "ọ̀sán",
      midnight: "ní ọgànjọ́ òru",
      afternoon: "ọ̀sán",
      night: "alẹ",
      morning: "owurọ",
      evening: "irọlẹ",
      night2: "òru",
    },
    narrow: {
      am: "a",
      pm: "p",
      noon: "ọ̀sán",
      midnight: "ọgànjọ́ òru",
      afternoon: "ní ọ̀sán",
      night: "lalẹ",
      morning: "ní owurọ",
      evening: "ní irọlẹ",
      night2: "ní òru",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "AM",
      pm: "PM",
      noon: "ọ̀sán",
      midnight: "ọgànjọ́ òru",
      afternoon: "ọ̀sán",
      night: "alẹ",
      morning: "owurọ",
      evening: "irọlẹ",
      night2: "òru",
    },
    wide: {
      am: "am.",
      pm: "pm.",
      noon: "ọ̀sán",
      midnight: "ní ọgànjọ́ òru",
      afternoon: "ní ọ̀sán",
      night: "lalẹ",
      morning: "ní owurọ",
      evening: "ní irọlẹ",
      night2: "ní òru",
    },

    narrow: {
      am: "a",
      pm: "p",
      noon: "ọ̀sán",
      midnight: "ọgànjọ́ òru",
      afternoon: "ni ọ̀sán",
      night: "lalẹ",
      morning: "ní owurọ",
      evening: "ní irọlẹ",
      night2: "ní òru",
    },
  },

  dateFormat: {
    full: "EEEE, d MMM yyyy",
    long: "d MMM yyyy",
    short: "d/M/yyyy",
    medium: "dd MM yyyy",
    strftime: "%A, %b %e %Y",
    strftimeShort: "%e/%m/%Y",
  },

  timeFormat: {
    full: "HH:mm:ss zzzz",
    medium: "H:mm:ss",
    long: "H:mm:ss zzzz",
    short: "H:mm",
    strftime: "%H:%M:%S %Z",
    strftimeShort: "%H:%M",
  },

  dateTimeFormat: {
    full: "EEEE, d MMM yyyy HH:mm:ss zzzz",
    medium: "dd MM yyyy H:m:ss",
    long: "d MMM yyyy H:mm:ss zzzz",
    short: "d/M/yyyy H:m",
    strftime: "%A, %b %e %Y %H:%M:%S %Z",
    strftimeShort: "%e/%m/%Y %H:%M",
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
