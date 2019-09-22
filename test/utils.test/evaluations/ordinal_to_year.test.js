const ordinalToYear = require("../../../lib/utils/evaluations/ordinal_to_year");

describe("OrdinalToYear returns the year of a given ordinal date starting from ordinal 0, which is the unix epoch", () => {
  test("should return 1970", () => {
    expect(ordinalToYear(0)).toBe(1970);
  });

  test("should return 2019", () => {
    expect(ordinalToYear(18221)).toBe(2019);
  });
  test("should return 1890", () => {
    // dividing by 86400000 turns a timestamp to days
    expect(ordinalToYear(new Date("1890-11-11") / 86400000)).toBe(1890);
  });
});
