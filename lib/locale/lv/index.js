const localise = require("./_util/localise");
const formatRelative = require("./_util/formatRelative");
const relativeDistance = require("./_util/relativeDistance");
const ordinal = require("./_util/ordinal");
const dayPeriod = require("./_util/dayPeriod");
/**
 * @type {locale}
 * @summary Latvian Language Support
 * @category locale
 * @language Latvian
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 */
const locale = {
  code: "lv",
  localise,
  formatRelative,
  relativeDistance,
  ordinal,
  dayPeriod,
  miscellaneous: {
    sameDate: "tie paši datumi",
  },
};

module.exports = locale;
