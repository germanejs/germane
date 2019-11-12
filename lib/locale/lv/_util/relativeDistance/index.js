/* eslint-disable func-names */

"use strict";

const prioritise = require("../../../../_util/format/prioritise");

// minūtēm
const relativeDistance = {
  now: {
    one: "tikko",
  },
  second: {
    one: ["1 %s", "sekunde", "sekundes"],
    other: ["%d %s", "sekunde", "sekundes", "sekundes", "sekundēm"],
  },
  millisecond: {
    one: ["1 %s", "milisekunde", "milisekunde"],
    other: ["%d %s", "milisekunde", "milisekundes", "milisekundes", "milisekundēm"],
  },
  minute: {
    one: ["1 %s", "minūte", "minūte"],
    other: ["%d %s", "minūte", "minūtes", "minūtes", "minūtēm"],
  },
  hour: {
    one: ["1 %s", "stunda", "stundas"],
    other: ["%d %s", "stunda", "stundas", "stundas", "stundām"],
  },
  day: {
    one: ["1 %s", "dienu", "dienas"],
    other: ["%d %s", "dienu", "dienas", "dienas", "dienām"],
  },
  week: {
    one: ["1 %s", "nedēļa", "nedēļas"],
    other: ["%d %s", "nedēļa", "nedēļas", "nedēļas", "nedēļām"],
  },
  month: {
    one: ["1 %s", "mēnesis", "mēneši"],
    other: ["%d %s", "mēnesis", "mēneši", "mēneši", "mēnešiem"],
  },
  year: {
    one: ["1 %s", "gada", "gadi"],
    other: ["%d %s", "gada", "gadi", "gadi", "gadiem"],
  },
};

function buildDistance(type, values, units, option = { addSuffix: true }) {
  const [distance, unit] = prioritise(values, units);

  if (unit === "second" && distance === 0) {
    return relativeDistance.now.one;
  }
  const relDistance = relativeDistance[unit];
  const pluralise = distance % 10 === 1 && distance % 100 !== 11;
  if (type === "future" && option.addSuffix) {
    if (distance > 1) {
      return (
        "pēc "
        + relDistance.other[0]
          .replace(/%d/, distance)
          .replace(/%s/, pluralise ? relDistance.other[3] : relDistance.other[4])
      );
    }

    return "pēc " + relDistance.one[0].replace(/%s/, relDistance.one[2]);
  }

  if (type === "past" && option.addSuffix) {
    if (distance > 1) {
      return (
        "pirms "
        + relDistance.other[0]
          .replace(/%d/, distance)
          .replace(/%s/, pluralise ? relDistance.other[3] : relDistance.other[4])
      );
    }
    return "pirms " + relDistance.one[0].replace(/%s/, relDistance.one[2]);
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
          return relativeDistance[unit].other[0]
            .replace(/%d/, distance)
            .replace(
              /%s/,
              pluralise ? relativeDistance[unit].other[1] : relativeDistance[unit].other[2],
            );
        }
        return relativeDistance[unit].one[0].replace(/%s/, relativeDistance[unit].one[1]);
      })
      .filter(function (value) {
        // removing every empty string.
        return value !== "";
      })
      .join(", ");
  }

  if (distance > 1) {
    return relDistance.other[0]
      .replace(/%d/, distance)
      .replace(/%s/, pluralise ? relDistance.other[1] : relDistance.other[2]);
  }
  return relDistance.one[0].replace(/%s/, relDistance.one[1]);
}

module.exports = buildDistance;
