const startOfQuarter = require("../../../lib/startOfQuarter");
const germane = require("../../../lib/germane");

describe("Returns the difference from beginning of the given dates quarter till the current given date", () => {
  test("should return difference in {Months|Days|Seconds|Minutes|Hours}", () => {
    expect(startOfQuarter(new Date(2019, 3, 9, 23, 45, 21))).toBe("8 days ago");
    expect(startOfQuarter(new Date("2000-02-29T22:21:59Z"))).toBe("1 month ago");
    expect(startOfQuarter(new Date("2045-07-12 23:12:12Z"))).toBe("11 days ago");
    expect(startOfQuarter(new Date("2011-10-31 23:00:00Z"))).toBe("30 days ago");
    expect(startOfQuarter(germane("20110401T010015Z"))).toBe("1 hour ago");
    expect(startOfQuarter(germane("19990101T000008Z"))).toBe("8 seconds ago");
    expect(startOfQuarter(germane("10000401T005949Z"))).toBe("59 minutes ago");
  });

  test("should throw an error (type or range)", () => {
    expect(startOfQuarter(new Date("1900 19 00"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfQuarter(new Date("2019 09 19").toString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
