const localise = require("./_util/localise");
const formatRelative = require("./_util/formatRelative");
const relativeDistance = require("./_util/relativeDistance");
const ordinal = require("./_util/ordinal");
const dayPeriod = require("./_util/dayPeriod");

/**
 * Handles the internalization of date and time.
 * @typedef {object} Locale
 * @property {string} code
 * @property {function} localise
 * @property {function} formatRelative
 * @property {function} relativeDistance
 * @property {function} ordinal
 * @property {function} dayPeriod
 * @property {object} miscellaneous
 * @property {string} miscellaneous.sameDate
 */
/**
 * @type {Locale}
 * @summary en-US default locale
 * @category locale
 * @language English
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 */
const locale = {
  code: "en-US",
  localise,
  formatRelative,
  relativeDistance,
  ordinal,
  dayPeriod,
  miscellaneous: {
    sameDate: "same dates",
  },
};

module.exports = locale;
