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
    full: "EEEE, MMMM d, yyyy",
    long: "MMMM d, yyyy",
    short: "M/d/yyyy",
    medium: "MMM d, yyyy",
    strftime: "%A, %B %e, %Y",
    strftimeShort: "%m/%e/%Y",
  },

  timeFormat: {
    full: "h:mm:ss a zzzz",
    medium: "h:mm:ss a",
    long: "h:mm:ss a zzzz",
    short: "h:mm a",
    strftime: "%I:%M:%S %P %Z",
    strftimeShort: "%I:%M %P",
  },

  dateTimeFormat: {
    full: "EEEE, MMMM d, yyyy [at] h:mm:ss a zzzz",
    medium: "MMM d, yyyy, h:mm:ss a",
    long: "MMMM d, yyyy [at] h:mm:ss a zzzz",
    short: "M/d/yyyy [at] h:mm a",
    strftime: "%A, %B %e, %Y at %I:%M:%S %P %Z",
    strftimeShort: "%B/%e/%Y at %I:%M %P",
  },

  weekStarts: 0,
  firstDay: 4,
};

/**
 * @param {String} token
 */
function localise(token) {
  return formatters[token];
}

module.exports = localise;
