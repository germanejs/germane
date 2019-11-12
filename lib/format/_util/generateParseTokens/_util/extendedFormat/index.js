"use strict";

function extendedFormat(locale) {
  const dateFormat = locale.localise("dateFormat");
  const timeFormat = locale.localise("timeFormat");
  const dateTimeFormat = locale.localise("dateTimeFormat");

  const formats = {
    PPPP: dateFormat.full,
    PPP: dateFormat.long,
    PP: dateFormat.medium,
    P: dateFormat.short,
    TTTT: timeFormat.full,
    TTT: timeFormat.long,
    TT: timeFormat.medium,
    T: timeFormat.short,
    pppp: dateTimeFormat.full,
    ppp: dateTimeFormat.long,
    pp: dateTimeFormat.medium,
    p: dateTimeFormat.short,
  };
  return formats;
}

module.exports = extendedFormat;
