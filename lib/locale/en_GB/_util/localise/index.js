"use strict";

const formatters = {
  month: {
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  },

  day: {
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    short: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
  },

  era: {
    wide: ["Before Christ", "Anno Domini"],
    abbreviated: ["BC", "AD"],
    narrow: ["B", "A"],
  },

  quarter: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },

  dayPeriod: {
    abbreviated: {
      am: "am",
      pm: "am",
      noon: "noon",
      midnight: "mid",
      afternoon: "afternoon",
      night: "night",
      morning: "morning",
      evening: "evening",
    },
    wide: {
      am: "am",
      pm: "pm",
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
      am: "am",
      pm: "pm",
      noon: "noon",
      midnight: "mid",
      afternoon: "afternoon",
      night: "night",
      morning: "morning",
      evening: "evening",
    },
    wide: {
      am: "am",
      pm: "pm",
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
    full: "EEEE, d MMMM yyyy",
    long: "d MMMM yyyy",
    short: "dd/MM/yyyy",
    medium: "d MMM yyyy",
    strftime: "%A, %e %B %Y",
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
    full: "EEEE, d MMMM yyyy [at] HH:mm:ss zzzz",
    medium: "d MMM yyyy, HH:mm:ss",
    long: "d MMMM yyyy [at] HH:mm:ss zzzz",
    short: "dd/MM/yyyy, HH:mm",
    strftime: "%A, %e %B %Y at %H:%M:%S %Z",
    strftimeShort: "%d/%m/%Y, %H:%M",
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
