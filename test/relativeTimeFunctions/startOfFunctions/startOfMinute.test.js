const startOfMinute = require("../../../lib/startOfMinute");
const germane = require("../../../lib/germane");

describe("Returns the time passed since the startDate of dates' minute", () => {
  test("should return {total seconds passed} ago", () => {
    expect(startOfMinute(germane("2000-01-10 23:09:34"))).toBe("34 seconds ago");
    expect(startOfMinute(germane("2019-08-01 12:11:00Z"))).toBe("0 second ago");
    expect(startOfMinute(new Date("2013-08-07 19:09:12Z"))).toBe("12 seconds ago");
    expect(startOfMinute(new Date("2011-09-14 14:15:56Z"))).toBe("56 seconds ago");
  });

  test("should throw an error", () => {
    expect(startOfMinute(new Date("2019 19 0"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfMinute("" + new Date("2020 19 19"))).toStrictEqual(new TypeError("Invalid Date"));

    expect(startOfMinute(new Date("2019 09 19 23:09:60"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });
});
