const subtract = require("../index");
const germane = require("../../germane");

describe("subtract (subtracts) given date and time values to a given date", () => {
  test("should return 1894-04-18T11:50:47.950Z", () => {
    expect(
      subtract(germane("2007-06-05"), {
        years: 29,
        months: 999,
        days: 290,
        hours: 12,
        minutes: 9,
        seconds: 12,
        ms: 50,
      }),
    ).toStrictEqual(new Date("1894-05-18T11:50:47.950Z"));
  });

  test("should return 1937-01-12T22:37:31.350Z", () => {
    expect(
      subtract(new Date("1991-11-20T10:45:12Z"), {
        years: 45,
        months: 89,
        days: 890,
        hours: 12,
        minutes: 7,
        seconds: 40,
        ms: 650,
      }),
    ).toStrictEqual(new Date("1937-01-12T22:37:31.350Z"));
  });

  test("should return 2074-08-17T01:09:01.000Z", () => {
    expect(
      subtract(germane("2074-01-05 00:02:00Z"), {
        months: 7,
        days: 12,
        hours: 1,
        minutes: 7,
        seconds: 1,
      }),
    ).toStrictEqual(new Date("2073-05-23T22:54:59.000Z"));
  });

  test("should throw an error", () => {
    expect(subtract(germane("2019 09 09"))).toStrictEqual(new TypeError("Invalid Date"));
    expect(subtract(new Date(2019, 11, 11, 23, 11, 45, 11), null)).toStrictEqual(
      new TypeError("Invalid Options, Expected options parameter to be an object"),
    );
    expect(subtract(new Date("2019-19-09"))).toStrictEqual(new RangeError("Invalid Date"));
    expect(
      subtract(new Date("2012 08 11 09:12:11"), {
        years: 12,
        months: null,
        days: 12,
      }),
    ).toStrictEqual(new RangeError("Invalid Options property, Expected a Number"));

    expect(
      subtract(undefined, {
        years: 12,
      }),
    ).toStrictEqual(new TypeError("Invalid Date"));
  });
});
