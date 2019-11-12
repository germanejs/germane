const min = require("../index");
const germane = require("../../germane");

describe("Min returns the minimum possible date in an array", () => {
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
  test('should return new Date("2019-01-11 09:11:56.706")', () => {
    expect(min(array)).toEqual(new Date("2019-01-11 09:11:56.706"));
  });

  test('should return new Date("1980-11-11")', () => {
    expect(min(dateArr)).toEqual(new Date("1974-12-20T16:30:00.000Z"));
  });

  test("should return an error", () => {
    expect(min()).toStrictEqual(RangeError("Min takes at least one argument"));
    expect(min(new Date())).toStrictEqual(TypeError("Expected argument to be an array"));
    expect(min([false, ...dateArr])).toStrictEqual(
      new TypeError("Invalid Date: array contains non-date value(s)"),
    );
    expect(min([new Date(""), ...array])).toStrictEqual(
      new RangeError("Invalid Date: array contains non-date value(s)"),
    );
  });
});
