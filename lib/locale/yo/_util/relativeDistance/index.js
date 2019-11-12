/* eslint-disable func-names */

"use strict";

const prioritise = require("../../../../_util/format/prioritise");

const relativeDistance = {
  now: {
    one: "ni bayi",
  },
  second: {
    one: "aayá 1",
    other: "aayá %d",
  },
  millisecond: {
    one: "Milise aayá 1",
    other: "Milise aayá %d",
  },
  minute: {
    one: "ìsẹjú 1",
    other: "ìsẹjú %d",
  },
  hour: {
    one: "wákati 1",
    other: "wákati %d",
  },
  day: {
    one: "ọjọ́ 1",
    other: "ọjọ́ %d",
  },
  week: {
    one: "ọsẹ 1",
    other: "ọsẹ %d",
  },
  month: {
    one: "oṣù 1",
    other: "oṣù %d",
  },
  quarter: {
    one: "Ìdámẹ́rin 1",
    other: "Ìdámẹ́rin %d",
  },
  year: {
    one: "ọdún 1",
    other: "ọdún %d",
  },
  businessDays: {
    one: "ọjọ́ iṣowo 1",
    other: "ọjọ́ iṣowo %d",
  },
};

function buildDistance(type, values, units, option = { addSuffix: true }) {
  const [distance, unit] = prioritise(values, units);

  if (unit === "second" && distance === 0) {
    return relativeDistance.now.one;
  }

  if (type === "future") {
    if (distance > 1 && option.addSuffix) {
      return "ní " + relativeDistance[unit].other.replace(/%d/, distance);
    }
    return "ní " + relativeDistance[unit].one.replace(/%d/, distance);
  }

  if (type === "past") {
    if (distance > 1 && option.addSuffix) {
      return relativeDistance[unit].other.replace(/%d/, distance) + " to kọjá";
    }
    return relativeDistance[unit].one.replace(/%d/, distance) + " to kọjá";
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
