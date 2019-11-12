/* eslint-disable func-names */

"use strict";

const prioritise = require("../../../../_util/format/prioritise");

const relativeDistance = {
  now: {
    one: "net nu",
  },
  second: {
    one: "1 seconden",
    other: "%d seconden",
  },
  millisecond: {
    one: "1 millseconden",
    other: "%d millseconden",
  },
  minute: {
    one: "1 minuut",
    other: "%d minuten",
  },
  hour: {
    one: "1 uur",
    other: "%d uur",
  },
  day: {
    one: "1 dag",
    other: "%d dagen",
  },
  week: {
    one: "1 week",
    other: "%d weken",
  },
  month: {
    one: "1 maand",
    other: "%d maanden",
  },
  year: {
    one: "1 jar",
    other: "%d jar",
  },
  businessDays: {
    one: "1 werkdag",
    other: "%d werkdagen",
  },
};

function buildDistance(type, values, units, option = { addSuffix: true }) {
  const [distance, unit] = prioritise(values, units);

  if (unit === "second" && distance === 0) {
    return relativeDistance.now.one;
  }

  if (type === "future") {
    if (distance > 1 && option.addSuffix) {
      return "in " + relativeDistance[unit].other.replace(/%d/, distance);
    }
    return "in " + relativeDistance[unit].one.replace(/%d/, distance);
  }

  if (type === "past") {
    if (distance > 1 && option.addSuffix) {
      return relativeDistance[unit].other.replace(/%d/, distance) + " geleden";
    }
    return relativeDistance[unit].one.replace(/%d/, distance) + " geleden";
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
        return relativeDistance[unit].one.replace(/%d/, distance);
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
  return relativeDistance[unit].one.replace(/%d/, distance);
}

module.exports = buildDistance;
