/* eslint-disable func-names */

"use strict";

const prioritise = require("../../../../_util/format/prioritise");

const relativeDistance = {
  now: {
    one: "solo ora",
  },
  second: {
    one: "1 secondi",
    other: "%d secondi",
  },
  millisecond: {
    one: "1 millesecondi",
    other: "%d millesecondi",
  },
  minute: {
    one: "1 minuto",
    other: "%d minuti",
  },
  hour: {
    one: "1 ora",
    other: "%d ore",
  },
  day: {
    one: "1 giorno",
    other: "%d giorni",
  },
  week: {
    one: "1 settimana",
    other: "%d settimane",
  },
  month: {
    one: "1 mese",
    other: "%d mesi",
  },
  year: {
    one: "1 anno",
    other: "%d anni",
  },
};

function buildDistance(type, values, units, option = { addSuffix: true }) {
  const [distance, unit] = prioritise(values, units);

  if (unit === "second" && distance === 0) {
    return relativeDistance.now.one;
  }

  if (type === "future" && option.addSuffix) {
    if (distance > 1) {
      return "tra " + relativeDistance[unit].other.replace(/%d/, distance);
    }
    return "tra " + relativeDistance[unit].one;
  }

  if (type === "past" && option.addSuffix) {
    if (distance > 1) {
      return relativeDistance[unit].other.replace(/%d/, distance) + " fa";
    }
    return relativeDistance[unit].one + " fa";
  }

  if (type === "difference") {
    return Array(units.length)
      .fill("")
      .map(function (value, index) {
        const newUnit = units.slice(index, units.length);
        // eslint-disable-next-line no-shadow
        const [distance, unit] = prioritise(values, newUnit);
        // prioritise only returns the unit with a value greater than 0;
        // when value is zero, it tends to repeated the same value twice.
        // so we have to check that the unit it provides correlates
        // with the unit in the current iteration.

        if (unit !== newUnit[0]) return value;
        if (distance < 1) return value;

        if (distance > 1) {
          return relativeDistance[unit].other.replace(/%d/, distance);
        }
        return relativeDistance[unit].one;
      })
      .filter(function (value) {
        // removing every empty string.
        return value !== "";
      })
      .join(", ");
  }

  if (distance > 1) {
    return relativeDistance[unit].other.replace(/%d/, distance);
  }
  return relativeDistance[unit].one;
}

module.exports = buildDistance;
