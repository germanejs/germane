/* eslint-disable func-names */

"use strict";

const prioritise = require("../../../../_util/format/prioritise");

const relativeDistance = {
  now: {
    one: "gerade jetzt",
  },
  second: {
    standalone: {
      one: "1 sekunde",
      other: "%d sekunden",
    },
    format: {
      one: "1 sekunde",
      other: "%d sekunden",
    },
  },
  millisecond: {
    standalone: {
      one: "1 millisekunde",
      other: "%d millisekunden",
    },
    format: {
      one: "1 millisekunde",
      other: "%d millisekunden",
    },
  },
  minute: {
    standalone: {
      one: "1 minute",
      other: "%d minuten",
    },
    format: {
      one: "1 minute",
      other: "%d minuten",
    },
  },
  hour: {
    standalone: {
      one: "1 stunde",
      other: "%d stunden",
    },
    format: {
      one: "1 stunde",
      other: "%d stunden",
    },
  },
  day: {
    standalone: {
      one: "1 tag",
      other: "%d tage",
    },
    format: {
      one: "1 tage",
      other: "%d tagen",
    },
  },
  week: {
    standalone: {
      one: "1 woche",
      other: "%d wochen",
    },
    format: {
      one: "1 woche",
      other: "%d wochen",
    },
  },
  month: {
    standalone: {
      one: "1 monat",
      other: "%d monate",
    },
    format: {
      one: "1 monate",
      other: "%d monaten",
    },
  },
  year: {
    standalone: {
      one: "1 jahr",
      other: "%d jahre",
    },
    format: {
      one: "1 jahre",
      other: "%d jahren",
    },
  },
  businessDays: {
    standalone: {
      one: "1 werktag",
      other: "%d werktage",
    },
    format: {
      one: "1 werktage",
      other: "%d werktagen",
    },
  },
};

function buildDistance(type, values, units, option = { addSuffix: true }) {
  const [distance, unit] = prioritise(values, units);

  if (unit === "second" && distance === 0) {
    return relativeDistance.now.one;
  }

  if (type === "future") {
    if (distance === 1 && option.addSuffix) {
      return "in " + relativeDistance[unit].format.one.replace(/%d/, distance);
    }
    if (distance > 1 && option.addSuffix) {
      return "in " + relativeDistance[unit].format.other.replace(/%d/, distance);
    }

    return "in " + relativeDistance[unit].standalone.one.replace(/%d/, distance);
  }

  if (type === "past") {
    if (distance === 1 && option.addSuffix) {
      return "vor " + relativeDistance[unit].format.one.replace(/%d/, distance);
    }
    if (distance > 1 && option.addSuffix) {
      return "vor " + relativeDistance[unit].format.other.replace(/%d/, distance);
    }

    return "vor " + relativeDistance[unit].standalone.one.replace(/%d/, distance);
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
          return relativeDistance[unit].standalone.other.replace(/%d/, distance);
        }
        return relativeDistance[unit].standalone.one.replace(/%d/, distance);
      })
      .filter(function (value) {
        // removing every empty string.
        return value !== "";
      })
      .join(", ");
  }

  if (distance > 1) {
    return relativeDistance[unit].standalone.other.replace(/%d/, distance);
  }
  return relativeDistance[unit].standalone.one.replace(/%d/, distance);
}

module.exports = buildDistance;
