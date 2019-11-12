const toObject = require("../index");
const germane = require("../../germane");

describe("toObject returns the array of date units for a given date", () => {
  test("should return []", () => {
    expect(toObject(new Date("2019-11-11 23:11:12"))).toEqual({
      year: 2019,
      month: 10,
      date: 11,
      hours: 23,
      minutes: 11,
      seconds: 12,
      milliseconds: 0,
    });
    expect(
      toObject(germane("2019-11-11 23:11:12Z"), {
        utc: true,
      }),
    ).toEqual({
      year: 2019,
      month: 10,
      date: 11,
      hours: 23,
      minutes: 11,
      seconds: 12,
      milliseconds: 0,
    });
    expect(
      toObject(germane("2019-11-11 23:11:12Z", "Asia/Seoul"), {
        utc: false,
      }),
    ).toEqual({
      year: 2019,
      month: 10,
      date: 12,
      hours: 8,
      minutes: 11,
      seconds: 12,
      milliseconds: 0,
    });
    expect(
      toObject(germane("2019-11-11 10:11:12Z", "America/Los_Angeles"), {
        utc: false,
      }),
    ).toEqual({
      year: 2019,
      month: 10,
      date: 11,
      hours: 2,
      minutes: 11,
      seconds: 12,
      milliseconds: 0,
    });
    expect(toObject(germane("2019-11-11", "Africa/Windhoek"))).toEqual({
      year: 2019,
      month: 10,
      date: 11,
      hours: 2,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    expect(toObject(new Date("1997-06-13 13:45:23.909Z"), { utc: true })).toEqual({
      year: 1997,
      month: 5,
      date: 13,
      hours: 13,
      minutes: 45,
      seconds: 23,
      milliseconds: 909,
    });
  });

  test("should return an error", () => {
    expect(toObject(new Date(" "))).toStrictEqual(new RangeError("Invalid Date"));
    expect(toObject(null)).toStrictEqual(new TypeError("Invalid Date"));
    expect(toObject(new Date(), "hello")).toStrictEqual(new TypeError("Invalid option"));
    expect(
      toObject(new Date(), {
        utc: 90,
      }),
    ).toStrictEqual(new TypeError("Invalid UTC option: expected a boolean"));
  });
});
