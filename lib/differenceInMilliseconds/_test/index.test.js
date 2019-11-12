const differenceInMilliseconds = require("../index");
const germane = require("../../germane");

describe("differenceInMilliseconds returns the distance between two dates in milliseconds", () => {
  test("should return the distance in milliseconds", () => {
    expect(
      differenceInMilliseconds(
        new Date("2019 09 09 13:22:56.900Z"),
        new Date("2019 09 09 13:22:56.900Z"),
      ),
    ).toBe(0);

    expect(differenceInMilliseconds(germane("20191111T193414Z"), germane("20191111T193414Z"))).toBe(
      0,
    );

    expect(differenceInMilliseconds(germane("2019-01"), germane("2010-11-19 23:11:02Z"))).toBe(
      -256092538000,
    );

    expect(
      differenceInMilliseconds(new Date("2019 12 31 18:34:52"), new Date("1970 01 01 12:11:09")),
    ).toBe(-1577773423000);
    expect(
      differenceInMilliseconds(new Date("1970 01 01 12:11:09"), new Date("2019 12 31 18:34:52")),
    ).toBe(1577773423000);
  });

  test("should throw errors", () => {
    expect(differenceInMilliseconds(new Date("2018 01 11"), germane("2019/11/11"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(differenceInMilliseconds("", new Date(""))).toStrictEqual(new TypeError("Invalid Date"));

    expect(
      differenceInMilliseconds(new Date("2018 01 11"), new Date("2019 23 10 23:90:09")),
    ).toStrictEqual(new RangeError("Invalid Date"));

    expect(differenceInMilliseconds(germane(null))).toStrictEqual(new TypeError("Invalid Date"));
  });
});
