const localise = require("./_util/localise");
const formatRelative = require("./_util/formatRelative");
const relativeDistance = require("./_util/relativeDistance");
const ordinal = require("./_util/ordinal");
const dayPeriod = require("./_util/dayPeriod");
/**
 * Handles the internalization of date and time.
 * @typedef { Object } Locale
 * @property {string} code
 * @property {function} localise
 * @property {function} formatRelative
 * @property {function} relativeDistance
 * @property {function} ordinal
 * @property {function} dayPeriod
 * @property {Object} miscellaneous
 */
/**
 * @type { Locale }
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
