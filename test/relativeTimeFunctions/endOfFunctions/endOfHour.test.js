const endOfHour = require("../../../lib/endOfHour");
const germane = require("../../../lib/germane");

describe("endOfHour returns the difference from now(date and time given) to the end of its hour", () => {
  test("should return in {Minutes | Seconds}", () => {
    expect(endOfHour(new Date("1999-05-18T23:19:45Z"))).toBe("In 40 minutes");
    expect(endOfHour(new Date("2019-09-09 12:00:01Z"))).toBe("In 59 minutes");
    expect(endOfHour(germane("2019-11-23 23:59:59Z"))).toBe("In 0 second");
    expect(endOfHour(germane("1900-01-18 14:13:12Z"))).toBe("In 46 minutes");
    expect(endOfHour(germane("1890-07-04 21:01:01Z"))).toBe("In 58 minutes");
  });

  test("should throw an error", () => {
    expect(endOfHour(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfHour(new Date("2019 19 09 23:12:01"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(endOfHour(new Date("2019 09 09 00:00:00").toISOString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
