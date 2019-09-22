const endOfWeek = require("../../../lib/endOfWeek");
const germane = require("../../../lib/germane");

describe("endOfWeek returns the end of the date current week", () => {
  test("should return distance till end of week in {days|hours|minutes|seconds}", () => {
    expect(endOfWeek(germane("2019-04-12 12:45:19Z"))).toBe("In 1 day");
    expect(endOfWeek(germane("2014-11-18 12:12:12Z"))).toBe("In 4 days");
    expect(endOfWeek(germane("2018-07-14 04:12:02Z"))).toBe("In 19 hours");
    expect(endOfWeek(new Date("2010-07-03 23:34:09Z"))).toBe("In 25 minutes");
    expect(endOfWeek(new Date("2010-07-03 23:59:09Z"))).toBe("In 50 seconds");
    expect(endOfWeek(new Date("1920-01-10 23:00:00Z"))).toBe("In 59 minutes");
  });

  test("should return an error", () => {
    expect(endOfWeek(new Date("2019 01 01 23:56:90"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(endOfWeek("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfWeek(false)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
