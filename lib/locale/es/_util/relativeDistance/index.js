/* eslint-disable func-names */

"use strict";

const prioritise = require("../../../../_util/format/prioritise");

const relativeDistance = {
  now: {
    one: "justo ahora",
  },
  second: {
    one: "1 segundo",
    other: "%d segundos",
  },
  millisecond: {
    one: "1 milisegundos",
    other: "%d milisegundos",
  },
  minute: {
    one: "1 minuto",
    other: "%d minutos",
  },
  hour: {
    one: "1 hora",
    other: "%d horas",
  },
  day: {
    one: "1 día",
    other: "%d días",
  },
  week: {
    one: "1 semana",
    other: "%d semanas",
  },
  month: {
    one: "1 mes",
    other: "%d meses",
  },
  quarter: {
    one: "1 trimestre",
    other: "%d trimestre",
  },
  year: {
    one: "1 años",
    other: "%d años",
  },
  businessDays: {
    one: "1 día habil",
    other: "%d días habiles",
  },
};

function buildDistance(type, values, units, option = { addSuffix: true }) {
  const [distance, unit] = prioritise(values, units);

  if (unit === "second" && distance === 0) {
    return relativeDistance.now.one;
  }

  if (type === "future") {
    if (distance > 1 && option.addSuffix) {
      return "en " + relativeDistance[unit].other.replace(/%d/, distance);
    }
    return "en " + relativeDistance[unit].one.replace(/%d/, distance);
  }

  if (type === "past") {
    if (distance > 1 && option.addSuffix) {
      return "hace " + relativeDistance[unit].other.replace(/%d/, distance);
    }
    return "hace " + relativeDistance[unit].one.replace(/%d/, distance);
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
