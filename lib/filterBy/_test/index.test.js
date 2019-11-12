const filterBy = require("../index");

describe("filterBy filters an array of date using a datetime unit", () => {
  const arr = [
    new Date("2019-01-23 19:45:09"),
    new Date("2018 09 11"),
    new Date("1901-02-03T04:05:06.007"),
    new Date("2000-07-05T00:12:11"),
    new Date("1200-05-31T12:56:59.900"),
    new Date("0014-11-09T14:00:56"),
    new Date("2018 07 04"),
    new Date("2045-11-11T23:11"),
  ];

  test("should Date[]", () => {
    expect(filterBy(arr, "month", 7)).toStrictEqual([arr[3], arr[6]]);

    expect(filterBy(arr, "year", 2018)).toStrictEqual([arr[1], arr[6]]);

    expect(filterBy(arr, "date", 11)).toStrictEqual([arr[1], arr[7]]);

    expect(filterBy(arr, "day", 3)).toStrictEqual([arr[0], arr[3], arr[4], arr[6]]);

    expect(filterBy(arr, "hour", 0)).toStrictEqual([arr[1], arr[3], arr[6]]);
  });

  test("should return an error", () => {
    expect(filterBy(new Date(), "hour", 8)).toStrictEqual(
      new TypeError("Expected argument at pos 1 to be an array"),
    );

    expect(filterBy([], "hour", 8)).toStrictEqual(new RangeError("Empty array"));

    expect(filterBy([new Date(), false, 133e12, new Date()], "hour", 8)).toStrictEqual(
      new TypeError("Invalid Date: array contains non-date value(s)"),
    );

    expect(filterBy([new Date(), 12e11], 0, 8)).toStrictEqual(
      new TypeError("Invalid unit: expected a string"),
    );

    expect(filterBy([new Date(), 12e11], "year", "8")).toStrictEqual(
      new TypeError("Invalid unit value: expected a number"),
    );

    expect(filterBy([new Date()], "hour", 28)).toStrictEqual(
      new RangeError("Invalid Date: hour out of range"),
    );

    expect(filterBy([new Date()], "day", 8)).toStrictEqual(
      new RangeError("Invalid Date: day out of range"),
    );

    expect(filterBy([new Date()], "date", 45)).toStrictEqual(
      new RangeError("Invalid Date: date out of range"),
    );

    expect(filterBy([new Date()], "month", 13)).toStrictEqual(
      new RangeError("Invalid Date: month out of range"),
    );

    expect(filterBy([new Date()], "year", -1)).toStrictEqual(
      new RangeError("Invalid Date: year out of range"),
    );
  });
});
