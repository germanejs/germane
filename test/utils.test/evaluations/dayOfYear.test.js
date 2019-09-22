const dayInYear = require("../../../lib/utils/evaluations/dayOfYear");

describe("Returns the  ordinal day in a given date", () => {
  test("should the day day in year", () => {
    const d = new Date("2019-12-31");
    expect(dayInYear(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate())).toBe(365);
    // dayInYear parameters defaults to the unix epoch.
    expect(dayInYear()).toBe(1);
  });
});
