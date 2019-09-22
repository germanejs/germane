const add = require("../../lib/add");
const germane = require("../../lib/germane");

describe("add adds given date and time values to a given date", () => {
  test("should return 2120-06-21T12:09:12.050Z", () => {
    expect(
      add(germane("2007-06-05"), {
        years: 29,
        months: 999,
        days: 290,
        hours: 12,
        minutes: 9,
        seconds: 12,
        ms: 50,
      }),
    ).toStrictEqual(new Date("2120-06-21T12:09:12.050Z"));
  });

  test("should return 2046-09-27T22:52:52.650Z", () => {
    expect(
      add(new Date("1991-11-20T10:45:12Z"), {
        years: 45,
        months: 89,
        days: 890,
        hours: 12,
        minutes: 7,
        seconds: 40,
        ms: 650,
      }),
    ).toStrictEqual(new Date("2046-09-27T22:52:52.650Z"));
  });

  test("should return 2007-08-17T01:09:01.000Z", () => {
    expect(
      add(germane("2007-01-05 00:02:00Z"), {
        months: 7,
        days: 12,
        hours: 1,
        minutes: 7,
        seconds: 1,
      }),
    ).toStrictEqual(new Date("2007-08-17T01:09:01.000Z"));
  });

  test("should throw an error", () => {
    expect(add(germane("2019 09 09"))).toStrictEqual(new TypeError("Invalid Date"));
    expect(add(new Date(2019, 11, 11, 23, 11, 45, 11), null)).toStrictEqual(
      new TypeError("Invalid Options, Expected options parameter to be an object"),
    );
    expect(
      add(new Date("2012 08 11 09:12:11"), {
        years: 12,
        months: null,
        days: 12,
      }),
    ).toStrictEqual(new RangeError("Invalid Options property, Expected a Number"));

    expect(
      add(undefined, {
        years: 12,
      }),
    ).toStrictEqual(new TypeError("Invalid Date"));
  });
});
