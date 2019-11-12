const max = require("../index");
const germane = require("../../germane");

describe("Min returns the furthest possible date in an array", () => {
  const dateArr = [
    germane("2019W124"),
    germane("2019-03-14"),
    germane("2019-11-11 23:11:11Z"),
    germane("2019-11-11 23:11:11Z"),
    germane("2019-11-11 00:00:00"),
    new Date("1980-11-11"),
    156789000000,
  ];
  const array = [
    new Date("2019 09 09 12:11:09.987"),
    new Date("2019-01-11 12:11:56.709"),
    new Date("2019-01-11 09:11:56.706"),
  ];
  test('should return new Date("2019 09 09 12:11:09.987")', () => {
    expect(max(array)).toEqual(new Date("2019 09 09 12:11:09.987"));
  });

  test('should return germane("2019-11-11 23:11:11Z")', () => {
    expect(max(dateArr)).toEqual(new Date("2019-11-11 23:11:11Z"));
  });

  test("should return an error", () => {
    expect(max()).toStrictEqual(RangeError("Max takes at least one argument"));
    expect(max(new Date())).toStrictEqual(TypeError("Expected argument to be an array"));
    expect(max([false, ...dateArr])).toStrictEqual(
      new TypeError("Invalid Date: array contains non-date value(s)"),
    );
    expect(max([new Date(""), ...array])).toStrictEqual(
      new RangeError("Invalid Date: array contains non-date value(s)"),
    );
  });
});
