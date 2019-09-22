const getMonthFromOrdinal = require("../../../lib/utils/evaluations/get_month_from_ordinal");

describe("getMonthFromOrdinal returns the ordinal of a month from a given ordinal date", () => {
  // Month is zero-indexed, starting from 0-11.
  test("should return 11", () => {
    expect(getMonthFromOrdinal(345, 2019)).toStrictEqual({
      startingOrdinal: 335,
      monthOrdinal: 11,
    });
  });

  test("should return 2", () => {
    expect(getMonthFromOrdinal(60, 2020)).toStrictEqual({ startingOrdinal: 32, monthOrdinal: 1 });
  });

  test("should return 6", () => {
    expect(getMonthFromOrdinal(153, 2019)).toStrictEqual({ startingOrdinal: 152, monthOrdinal: 5 });
  });

  test("should return 9", () => {
    expect(getMonthFromOrdinal(248, 2019)).toStrictEqual({ startingOrdinal: 244, monthOrdinal: 8 });
  });
});
