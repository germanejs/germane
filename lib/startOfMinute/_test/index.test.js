const startOfMinute = require("../index");
const germane = require("../../germane");

describe("Returns the time passed since the current of dates' minute", () => {
  test("should return {total seconds passed} ago", () => {
    // 01:00
    expect(startOfMinute(germane("2000-01-10 23:09:34", "Africa/Algiers")).toISOString()).toBe(
      "2000-01-10T22:09:00.000Z",
    );
    // +02:00
    expect(startOfMinute(germane("2019-08-01 12:11:00Z", "Africa/Bujumbura")).toISOString()).toBe(
      "2019-08-01T12:11:00.000Z",
    );
    // +00:53
    expect(startOfMinute(germane("1780-08-07 19:09:12Z", "Europe/Berlin")).toISOString()).toBe(
      "1780-08-07T19:09:00.000Z",
    );
  });

  test("should throw an error", () => {
    expect(startOfMinute(new Date("2019 19 0"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfMinute("" + new Date("2020 19 19"))).toStrictEqual(new TypeError("Invalid Date"));

    expect(startOfMinute(new Date("2019 09 19 23:09:60"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });
});
