"use strict";

/**
 * @summary parses the strftime extended format
 * @param {{locale: {}}} locale Locale.
 */
function extendedFormat(locale) {
  const localeformats = locale.localise;
  const formats = {
    "%c": localeformats("dateTimeFormat").strftime,
    "%x": localeformats("dateFormat").strftime,
    "%X": localeformats("timeFormat").strftime,
    "%D": localeformats("dateFormat").strftimeShort,
    "%r": "%I:%M:%S %p",
    "%R": "%H:%M",
    "%T": "%H:%M:%S",
    "%F": "%Y-%m-%d",
  };

  return formats;
}

module.exports = extendedFormat;
