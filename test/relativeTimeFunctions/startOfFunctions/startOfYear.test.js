const startOfYear = require("../../../lib/startOfYear");
const germane = require("../../../lib/germane");

describe("Returns the difference between the date provided and when its year started", () => {
  test("should return {Months|Days|Hours|Minutes|Seconds} ago", () => {
    expect(startOfYear(germane("2019-12-12T09:23:09.000Z"))).toBe("11 months ago");
    expect(startOfYear(germane("2019-08-11T18:19:49.000Z"))).toBe("7 months ago");
    expect(startOfYear(germane(1546553685000))).toBe("2 days ago");
    expect(startOfYear(germane("2000-01-01T19:18:56.000Z"))).toBe("19 hours ago");
    expect(startOfYear(new Date("1776-01-01"))).toBe("0 second ago");
    expect(startOfYear(new Date("2030-01-01 00:09:09Z"))).toBe("9 minutes ago");
    expect(startOfYear(new Date("2017-01-01 00:00:09Z"))).toBe("9 seconds ago");
    expect(startOfYear(new Date("2016-01-21"))).toBe("20 days ago");
    // 👇 new Date("2019 01 03 23:14:45")
    expect(startOfYear(1546553685000)).toBe("2 days ago");
    expect(startOfYear(new Date("1999-07-05T10:45:12Z"))).toBe("6 months ago");
  });

  test("should throw an error", () => {
    expect(startOfYear(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfYear(new Date("2019 19 09"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfYear(new Date("2019 09 09").toISOString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
