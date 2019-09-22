const startOfHour = require("../../../lib/startOfHour");
const germane = require("../../../lib/germane");

describe("Returns the startDate of current hour in words", () => {
  test("should return (difference in minutes | seconds) ago", () => {
    expect(startOfHour(germane("2020-09-12 12:35:45Z"))).toBe("35 minutes ago");
    expect(startOfHour(germane("2019-09-23 23:12:59Z"))).toBe("12 minutes ago");
    expect(startOfHour(germane("2010-01-19 23:00:34Z"))).toBe("34 seconds ago");
    expect(startOfHour(new Date("1900-07-04 00:00:01Z"))).toBe("1 second ago");
    expect(startOfHour(new Date("1899-12-31 19:00:00Z"))).toBe("0 second ago");
    expect(startOfHour(new Date("2050-07-05 00:01:59Z"))).toBe("1 minute ago");
    expect(startOfHour(new Date("2011-06-30"))).toBe("0 second ago");
  });

  test("should throw an error (type or range)", () => {
    expect(startOfHour(new Date("19 19 19"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfHour(new Date("2019 09 19").toString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
