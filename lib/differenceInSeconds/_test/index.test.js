const differenceInSeconds = require("../index");
const germane = require("../../germane");

describe("differenceInSeconds returns the distance between two dates in seconds", () => {
  test("should return the distance in seconds", () => {
    expect(differenceInSeconds(new Date(), new Date())).toBe(0);

    expect(
      differenceInSeconds(germane("2010-11-19T23:11:02Z"), germane("2019-01-23T02:17:09Z")),
    ).toBe(258001567);

    expect(
      differenceInSeconds(germane("2010-11-19T18:34:52Z"), germane("2000-01-23T12:11:09Z")),
    ).toBe(-341562223);

    expect(
      differenceInSeconds(new Date("1970 01 01 12:11:09Z"), new Date("2019 12 31 18:34:52Z")),
    ).toBe(1577773423);
  });

  test("should return errors", () => {
    expect(differenceInSeconds(new Date("2018 01 11"), germane("2019-53-1"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(differenceInSeconds("", new Date(""))).toStrictEqual(new TypeError("Invalid Date"));

    expect(
      differenceInSeconds(new Date("2018 01 11"), new Date("2019 23 10 23:90:09")),
    ).toStrictEqual(new RangeError("Invalid Date"));

    expect(differenceInSeconds(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
