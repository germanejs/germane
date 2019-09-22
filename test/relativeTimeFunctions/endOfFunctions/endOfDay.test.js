const endOfDay = require("../../../lib/endOfDay");
const germane = require("../../../lib/germane");

describe("endOfDay returns the difference from given date and time to the end of its day", () => {
  test("should return the end of day either in seconds | minutes | hours, varying on the datetime specified", () => {
    expect(endOfDay(germane("20140618T091233Z"))).toBe("In 14 hours");
    expect(endOfDay(germane("19451012T181956Z"))).toBe("In 5 hours");
    expect(endOfDay(germane("18801223T233412Z"))).toBe("In 25 minutes");
    expect(endOfDay(new Date("1605-12-04 23:59:45Z"))).toBe("In 14 seconds");
    expect(endOfDay(new Date("2056-08-31 23:00:00Z"))).toBe("In 59 minutes");
  });
  test("should throw an error", () => {
    expect(endOfDay(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfDay("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfDay({})).toStrictEqual(new TypeError("Invalid Date"));
  });
});
