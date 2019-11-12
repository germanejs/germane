/* eslint-disable func-names */

"use strict";

const prioritise = require("../../../../_util/format/prioritise");

const relativeDistance = {
  now: {
    one: "só agora",
  },
  second: {
    one: "1 segundo",
    other: "%d segundos",
  },
  millisecond: {
    one: "1 milissegundo",
    other: "%d milissegundos",
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
    one: "1 dia",
    other: "%d dias",
  },
  week: {
    one: "1 semana",
    other: "%d semanas",
  },
  month: {
    one: "1 mês",
    other: "%d meses",
  },
  year: {
    one: "1 ano",
    other: "%d anos",
  },
  businessDays: {
    one: "1 dia útil",
    other: "%d dia úteis",
  },
};

function buildDistance(type, values, units, option = { addSuffix: true }) {
  const [distance, unit] = prioritise(values, units);

  if (unit === "second" && distance === 0) {
    return relativeDistance.now.one;
  }

  if (type === "future") {
    if (distance > 1 && option.addSuffix) {
      return "em " + relativeDistance[unit].other.replace(/%d/, distance);
    }
    return "em " + relativeDistance[unit].one.replace(/%d/, distance);
  }

  if (type === "past") {
    if (distance > 1 && option.addSuffix) {
      return relativeDistance[unit].other.replace(/%d/, distance) + " atrás";
    }
    return relativeDistance[unit].one.replace(/%d/, distance) + " atrás";
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
