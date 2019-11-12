/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 *
 */

"use strict";

function getGMT(offset) {
  const [hour, minute] = divmod(Math.abs(offset), 60);
  const sign = offset <= 0 ? "+" : "-";
  const padHour = padInt(hour, "padStart", 2, "0");
  const padMinute = padInt(minute, "padStart", 2, "0");
  return { padHour, padMinute, sign };
}

module.exports = getGMT;
