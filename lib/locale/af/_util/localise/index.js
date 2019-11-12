"use strict";

const formatters = {
  month: {
    abbreviated: [
      "Jan.",
      "Feb.",
      "Mrt.",
      "Apr.",
      "Mei",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Okt.",
      "Nov.",
      "Des.",
    ],
    wide: [
      "Januarie",
      "Februarie",
      "Maart",
      "April",
      "Mei",
      "Junie",
      "Julie",
      "Augustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  },

  day: {
    abbreviated: ["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."],
    wide: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
    short: ["S", "M", "D", "W", "D", "V", "S"],
    narrow: ["S", "M", "D", "W", "D", "V", "S"],
  },

  era: {
    wide: ["voor Christus", "na Christus"],
    abbreviated: ["v.C.", "n.C."],
    narrow: ["v.C.", "n.C."],
  },

  quarter: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["K1", "K2", "K3", "K4"],
    wide: ["1ste kwartaal", "2de kwartaal", "3de kwartaal", "4de kwartaal"],
  },

  dayPeriod: {
    abbreviated: {
      am: "vm.",
      pm: "nm.",
      noon: "middag",
      midnight: "middernag",
      afternoon: "middag",
      night: "nag",
      morning: "oggend",
      evening: "aand",
    },
    wide: {
      am: "vm.",
      pm: "nm.",
      noon: "middag",
      midnight: "middernag",
      afternoon: "middag",
      night: "nag",
      morning: "oggend",
      evening: "aand",
    },
    narrow: {
      am: "v.",
      pm: "n.",
      noon: "m",
      midnight: "mid",
      afternoon: "in die middag",
      night: "in die nag",
      morning: "in die oggend",
      evening: "in die aand",
    },
  },

  dayPeriodFormatted: {
    abbreviated: {
      am: "vm.",
      pm: "nm.",
      noon: "middag",
      midnight: "middernag",
      afternoon: "middag",
      night: "nag",
      morning: "oggend",
      evening: "aand",
    },
    wide: {
      am: "vm.",
      pm: "nm.",
      noon: "midday",
      midnight: "in die middernag",
      afternoon: "in die middag",
      night: "in die nag",
      morning: "in die oggend",
      evening: "in die aand",
    },

    narrow: {
      am: "v.",
      pm: "n.",
      noon: "m",
      midnight: "md",
      afternoon: "in die middag",
      night: "in die nag",
      morning: "in die oggend",
      evening: "in die aand",
    },
  },

  dateFormat: {
    full: "EEEE dd MMMM yyyy",
    long: "dd MMMM yyyy",
    short: "yyyy-MM-dd",
    medium: "dd MMM yyyy",
    strftime: "%A %d %B %Y",
    strftimeShort: "%Y-%m-%d",
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
    full: "EEEE dd MMMM yyyy HH:mm:ss zzzz",
    medium: "dd MMM yyyy HH:mm:ss",
    long: "dd MMMM yyyy HH:mm:ss zzzz",
    short: "yyyy-MM-dd HH:mm",
    strftime: "%A %d %B %Y %H:%M:%S %Z",
    strftimeShort: "%Y-%m-%d %H:%M",
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
