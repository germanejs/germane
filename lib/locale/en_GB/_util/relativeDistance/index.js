/* eslint-disable func-names */

"use strict";

const prioritise = require("../../../../_util/format/prioritise");

const relativeDistance = {
  now: {
    one: "just now",
  },
  second: {
    one: "1 second",
    other: "%d seconds",
  },
  millisecond: {
    one: "1 millisecond",
    other: "%d milliseconds",
  },
  minute: {
    one: "1 minute",
    other: "%d minutes",
  },
  hour: {
    one: "1 hour",
    other: "%d hours",
  },
  day: {
    one: "1 day",
    other: "%d days",
  },
  week: {
    one: "1 week",
    other: "%d weeks",
  },
  month: {
    one: "1 month",
    other: "%d months",
  },
  quarter: {
    one: "1 quarter",
    other: "%d quarters",
  },
  year: {
    one: "1 year",
    other: "%d years",
  },
  businessDays: {
    one: "1 business day",
    other: "%d business days",
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
      return relativeDistance[unit].other.replace(/%d/, distance) + " ago";
    }
    return relativeDistance[unit].one.replace(/%d/, distance) + " ago";
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
