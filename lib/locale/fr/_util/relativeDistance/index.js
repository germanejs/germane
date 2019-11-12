/* eslint-disable func-names */

"use strict";

const prioritise = require("../../../../_util/format/prioritise");

const relativeDistance = {
  now: {
    one: "tout à l'heure",
  },
  second: {
    one: "1 seconde",
    other: "%d secondes",
  },
  millisecond: {
    one: "1 millisecondes",
    other: "%d millisecondes",
  },
  minute: {
    one: "1 minute",
    other: "%d minutes",
  },
  hour: {
    one: "1 heure",
    other: "%d heures",
  },
  day: {
    one: "1 jour",
    other: "%d jours",
  },
  week: {
    one: "1 semaine",
    other: "%d semaines",
  },
  month: {
    one: "1 mois",
    other: "%d mois",
  },
  quarter: {
    one: "1 trimestre",
    other: "%d trimestres",
  },
  year: {
    one: "1 an",
    other: "%d ans",
  },
  businessDays: {
    one: "1 jour ouvrable",
    other: "%d jours ouvrables",
  },
};

function buildDistance(type, values, units, option = { addSuffix: true }) {
  const [distance, unit] = prioritise(values, units);
  if (unit === "second" && distance === 0) {
    return relativeDistance.now.one;
  }
  if (type === "future") {
    if (distance > 1 && option.addSuffix) {
      return "il y a " + relativeDistance[unit].other.replace(/%d/, distance);
    }
    return "il y a " + relativeDistance[unit].one.replace(/%d/, distance);
  }
  if (type === "past") {
    if (distance > 1 && option.addSuffix) {
      return "dans " + relativeDistance[unit].other.replace(/%d/, distance);
    }
    return "dans " + relativeDistance[unit].one.replace(/%d/, distance);
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
        return value !== "";
      }) // FIXME: check the french coordination of '4 months, 1 week' and others.
      .join(", ");
  }
  if (distance > 1) {
    return relativeDistance[unit].other.replace(/%d/, distance);
  }
  return relativeDistance[unit].one.replace(/%d/, distance);
}

module.exports = buildDistance;
