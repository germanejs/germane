const differenceInHours = require("../../lib/differenceInHours");
const germane = require("../../lib/germane");

describe("differenceInHours returns the distance between two dates in hours", () => {
  test("should return the distance in hours", () => {
    expect(differenceInHours(new Date(), new Date())).toBe(0);

    expect(
      differenceInHours(new Date("2010 11 19 23:11:02"), new Date("2019 01 23 02:17:09")),
    ).toBe(71667);

    expect(differenceInHours(germane("2010-11-19 18:34:52"), germane("2000-01-23 12:11:09"))).toBe(
      94878,
    );

    expect(differenceInHours(germane("2019-12-31 18:34:52"), germane("1970-01-01 12:11:09"))).toBe(
      438270,
    );
  });

  test("should throw errors", () => {
    expect(differenceInHours(new Date("2018 01 11"), germane("2019 09 09"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(differenceInHours("", new Date(""))).toStrictEqual(new TypeError("Invalid Date"));

    expect(
      differenceInHours(new Date("2018 01 11"), new Date("2019 23 10 23:90:09")),
    ).toStrictEqual(new RangeError("Invalid Date"));

    expect(differenceInHours(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
