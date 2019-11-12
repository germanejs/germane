"use strict";

const prioritise = require("../../../../utils/replacers/prioritise");

const relativeDistance = {
  now: {
    one: "just now",
  },
  second: {
    one: "%d s",
  },
  minute: {
    one: "%d m",
  },
  hour: {
    one: "%d h",
  },
  day: {
    one: "%d d",
  },
  week: {
    one: "%d w",
  },
  month: {
    one: "%d m",
  },
  year: {
    one: "%d y",
  },
  quarter: {
    one: "%d q",
  },
  businessDays: {
    one: "%d bd",
  },
};

function buildShortDistance(type, values, units, option = { addSuffix: true }) {
  const [distance, unit] = prioritise(values, units);

  if (unit === "second" && distance === 0) {
    return relativeDistance.now.one;
  }

  if (type === "future") {
    if (distance > 1 && option.addSuffix) {
      return (
        "in "
        + relativeDistance[unit].one
          .replace(/%d/, distance)
          .split(" ")
          .join("")
      );
    }

    return (
      "in "
      + relativeDistance[unit].one
        .replace(/%d/, distance)
        .split(" ")
        .join("")
    );
  }

  if (type === "past") {
    if (distance > 1 && option.addSuffix) {
      return (
        relativeDistance[unit].one
          .replace(/%d/, distance)
          .split(" ")
          .join("") + " ago"
      );
    }

    return (
      relativeDistance[unit].one
        .replace(/%d/, distance)
        .split(" ")
        .join("") + " ago"
    );
  }

  return relativeDistance[unit].one
    .replace(/%d/, distance)
    .split(" ")
    .join("");
}

module.exports = buildShortDistance;
