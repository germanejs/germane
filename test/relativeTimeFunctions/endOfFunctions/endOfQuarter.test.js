const endOfQuarter = require("../../../lib/endOfQuarter");
const germane = require("../../../lib/germane");

describe("endOfQuarter returns the difference from given date to when its quarter ends", () => {
  test("should return difference till quarter end", () => {
    expect(endOfQuarter(germane("2019-09-12 19:23:18Z"))).toBe("In 18 days");
    expect(endOfQuarter(germane("2023-01-12 09:12:19Z"))).toBe("In 2 months");
    expect(endOfQuarter(germane("1990-12-31 22:00:00Z"))).toBe("In 1 hour");
    expect(endOfQuarter(new Date("1900-06-30 23:59:59Z"))).toBe("In 0 second");
    expect(endOfQuarter(new Date("2039-02-27"))).toBe("In 1 month");
    expect(endOfQuarter(new Date("2019-09-30 23:20:34Z"))).toBe("In 39 minutes");
  });
  test("should return an error", () => {
    expect(endOfQuarter(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfQuarter("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfQuarter([null])).toStrictEqual(new TypeError("Invalid Date"));
  });
});
