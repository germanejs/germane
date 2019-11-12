const toArray = require("../index");
const germane = require("../../germane");

describe("toArray returns the array of date units for a given date", () => {
  test("should return []", () => {
    expect(toArray(new Date("2019-11-11 23:11:12"))).toEqual([2019, 10, 11, 23, 11, 12, 0]);
    expect(toArray(germane("2019-11-11 23:11:12Z"), { utc: true })).toEqual([
      2019,
      10,
      11,
      23,
      11,
      12,
      0,
    ]);
    expect(toArray(germane("2019-11-11 23:11:12Z", "Asia/Seoul"), { utc: false })).toEqual([
      2019,
      10,
      12,
      8,
      11,
      12,
      0,
    ]);
    expect(toArray(germane("2019-11-11 10:11:12Z", "America/Los_Angeles"), { utc: false })).toEqual(
      [2019, 10, 11, 2, 11, 12, 0],
    );
    expect(toArray(germane("2019-11-11", "Africa/Windhoek"))).toEqual([2019, 10, 11, 2, 0, 0, 0]);
    expect(toArray(new Date("1997-06-13 13:45:23.909Z"), { utc: true })).toEqual([
      1997,
      5,
      13,
      13,
      45,
      23,
      909,
    ]);
  });

  test("should return an error", () => {
    expect(toArray(new Date(" "))).toStrictEqual(new RangeError("Invalid Date"));
    expect(toArray(null)).toStrictEqual(new TypeError("Invalid Date"));
    expect(toArray(new Date(), "hello")).toStrictEqual(new TypeError("Invalid option"));
    expect(
      toArray(new Date(), {
        utc: 90,
      }),
    ).toStrictEqual(new TypeError("Invalid UTC option: expected a boolean"));
  });
});
