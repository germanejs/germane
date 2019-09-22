const timestampToDate = require("../../../lib/utils/evaluations/timestampToDate");

describe("TimestampToDate as name implies, evaluates a timestamp to a date", () => {
  test("should return an object with date and time units", () => {
    const date = {
      year: 2019,
      month: 10,
      day: 23,
      hour: 9,
      minute: 34,
      second: 11,
      ms: 0,
      dayOfWeek: 6,
      week: 47,
      ordinal: 327,
      isoWeek: 47,
    };
    expect(timestampToDate(1574501651000)).toStrictEqual(date);
  });

  test("should return an object with date and time units", () => {
    const date = {
      year: 1983,
      month: 0,
      day: 1,
      hour: 18,
      minute: 14,
      second: 51,
      ms: 999,
      dayOfWeek: 6,
      week: 1,
      ordinal: 1,
      isoWeek: 52,
    };
    expect(timestampToDate(410292891999)).toStrictEqual(date);
  });

  test("should return an object with date and time units", () => {
    const date = {
      year: 2048,
      month: 11,
      day: 31,
      hour: 0,
      minute: 54,
      second: 10,
      ms: 678,
      dayOfWeek: 4,
      week: 53,
      ordinal: 366,
      isoWeek: 53,
    };
    expect(timestampToDate(2492988850678)).toStrictEqual(date);
  });
});
