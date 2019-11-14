const closestTo = require("../index");
const germane = require("../../germane");
describe("closestTo returns the date nearest to the base date from a given array", () => {
  test('should return "2019-11-09T13:56:59.901Z"', () => {
    expect(
      closestTo(new Date("2019-11-09T14:09:27.099Z"), [
        new Date("2019-11-09T15:00:00.999Z"),
        new Date("2019-11-10"),
        new Date("2019-11-09T13:56:59.901Z"),
      ]),
    ).toEqual(new Date("2019-11-09T13:56:59.901Z"));
  });

  test('should return "1900-12-11T14:09:27.100Z"', () => {
    expect(
      closestTo(new Date("1900-12-11T14:09:27.099Z"), [
        new Date("1900-11-09T15:00:00.999Z"),
        new Date("1900-12-11T14:09:27.909Z"),
        new Date("1900-12-11T14:09:27.100Z"),
        new Date("1900-12-11T15:09:27.100Z"),
      ]),
    ).toEqual(new Date("1900-12-11T14:09:27.100Z"));
  });

  test('should return "2011-02-19T21:01:00.001Z"', () => {
    expect(
      closestTo(germane("2011-11-09T14:09:27.099Z"), [
        germane("2019-11-09T15:00:00.999Z"),
        germane("2019-11-10"),
        germane("2011-02-19T21:01:00.001Z"),
      ]),
    ).toEqual(new Date("2011-02-19T21:01:00.001Z"));
  });

  test('should return "1900-12-11T14:09:27.099Z"', () => {
    expect(
      closestTo(germane("1900-12-11T14:09:27.099Z"), [
        germane("1900-11-09T15:00:00.999Z"),
        germane("1900-12-11T14:09:27.099Z"),
        germane("1900-12-11T14:09:27.100Z"),
        germane("1900-12-11T15:09:27.100Z"),
      ]),
    ).toEqual(new Date("1900-12-11T14:09:27.099Z"));
  });

  test("should return errors", () => {
    expect(closestTo(new Date(), "new Date()")).toStrictEqual(
      new TypeError("Expected argument at pos 1 to be an array"),
    );

    expect(closestTo(new Date(), [])).toStrictEqual(new RangeError("Empty array"));

    expect(closestTo(new Date(), [new Date(), false, 133e12, new Date()])).toStrictEqual(
      new TypeError("Invalid Date: array contains non-date value(s)"),
    );

    expect(closestTo([new Date(), 12e11])).toStrictEqual(new TypeError("Invalid Date"));

    expect(closestTo(new Date("19/19/19"))).toStrictEqual(new RangeError("Invalid Date"));
  });
});
