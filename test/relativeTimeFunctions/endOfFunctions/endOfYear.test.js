const endOfYear = require("../../../lib/endOfYear");
const germane = require("../../../lib/germane");

describe("endOfYear returns the difference between given date till when its year ends", () => {
  test("should return difference till given here end ", () => {
    expect(endOfYear(new Date("2019-02-28"))).toBe("In 10 months");
    expect(endOfYear(new Date("2011-04-01 06:18:45Z"))).toBe("In 8 months");
    expect(endOfYear(new Date("2019-12-31"))).toBe("In 23 hours");
    expect(endOfYear(new Date("1775-12-31 23:55:17Z"))).toBe("In 4 minutes");
    expect(endOfYear(new Date("2013-12-31 23:59:00Z"))).toBe("In 59 seconds");
    expect(endOfYear(new Date("2050-12-30"))).toBe("In 1 day");
  });

  test("should throw an error", () => {
    expect(endOfYear(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfYear("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfYear(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
