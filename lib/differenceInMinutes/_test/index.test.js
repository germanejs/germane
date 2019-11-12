const differenceInMinutes = require("../index");
const germane = require("../../germane");

describe("differenceInMinutes returns the distance between two dates in minutes", () => {
  test("should return the distance in minutes", () => {
    expect(
      differenceInMinutes(
        new Date("2099-11-11 00:01:34.909Z"),
        new Date("2099-11-11 00:01:34.909Z"),
      ),
    ).toBe(0);

    expect(differenceInMinutes(germane("2019-W09"), germane("2019-W09"))).toBe(0);

    expect(
      differenceInMinutes(new Date("2010-11-19 23:11:02Z"), new Date("2019-01-23 02:17:09Z")),
    ).toBe(4300026);

    expect(
      differenceInMinutes(germane("2010-11-19 18:34:52Z"), germane("2000-01-23 12:11:09Z")),
    ).toBe(-5692703);

    expect(
      differenceInMinutes(germane("2019-12-31 18:34:52"), germane("1970-01-01 12:11:09")),
    ).toBe(-26296223);
  });

  test("should throw errors", () => {
    expect(differenceInMinutes(new Date("2018 01 11"), new Date(""))).toStrictEqual(
      new RangeError("Invalid Date"),
    );
    expect(differenceInMinutes("", new Date(""))).toStrictEqual(new TypeError("Invalid Date"));

    expect(
      differenceInMinutes(germane("2018 01 11"), new Date("2019 23 10 23:90:09")),
    ).toStrictEqual(new TypeError("Invalid Date"));

    expect(differenceInMinutes(germane(null))).toStrictEqual(new TypeError("Invalid Date"));
    expect(differenceInMinutes(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
