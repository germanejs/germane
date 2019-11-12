const ordinalOfPrevYear = require("../index");

describe("OrdinalOfPrevYear returns the ordinal of the last day of previous year of the param starting from year 1", () => {
  test("should return 719162", () => {
    expect(ordinalOfPrevYear(1970)).toBe(719162);
  });

  test("should return 693595", () => {
    expect(ordinalOfPrevYear(1900)).toBe(693595);
  });

  test("should return 735233", () => {
    expect(ordinalOfPrevYear(2014)).toBe(735233);
  });

  test("should return 931003", () => {
    expect(ordinalOfPrevYear(2550)).toBe(931003);
  });

  test("should return 0", () => {
    expect(ordinalOfPrevYear(1)).toBe(0);
  });
});
