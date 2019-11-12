const timestampToTime = require("../index");
const { absCeil } = require("../../roundingMethods");

describe("timestampToTime, parses a timestamp into date and time units", () => {
  test("should return an object of date and time", () => {
    const x = {
      hour: 11,
      minute: 32,
      second: 52,
      totalHour: 3203,
      totalMinute: 192212,
      totalSecond: 11532772,
      totalMillisecond: 11532772782,
      totalWeek: 19,
      millisecond: 782,
    };
    expect(timestampToTime(11532772782)).toStrictEqual(x);
  });

  test("should return an object of date and time", () => {
    const x = {
      hour: 12,
      minute: 33,
      second: 53,
      totalHour: 3204,
      totalMinute: 192213,
      totalSecond: 11532773,
      totalMillisecond: 11532772782,
      totalWeek: 20,
      millisecond: 782,
    };
    expect(timestampToTime(11532772782, absCeil)).toStrictEqual(x);
  });

  test("should return an object of date and time", () => {
    const x = {
      hour: 11,
      minute: 32,
      second: 52,
      totalHour: 3203,
      totalMinute: 192212,
      totalSecond: 11532772,
      totalMillisecond: 11532772782,
      totalWeek: 19,
      millisecond: 782,
    };
    expect(timestampToTime(11532772782, Math.floor)).toStrictEqual(x);
  });
  test("should return an object of date and time", () => {
    const x = {
      hour: 1,
      minute: 0,
      second: 0,
      totalHour: 25,
      totalMinute: 1500,
      totalSecond: 9e4,
      totalMillisecond: 9e7,
      totalWeek: 0,
      millisecond: 0,
    };
    expect(timestampToTime(9e7, Math.floor)).toStrictEqual(x);
  });
});
