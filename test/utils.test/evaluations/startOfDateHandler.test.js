const {
  startOfHourHandler,
  startOfDayHandler,
  startOfWeekHandler,
  startOfMonthHandler,
  startOfQuarterHandler,
  startOfYearHandler,
} = require("../../../lib/utils/evaluations/startOfDateHandlers");

describe("Handles difference from given datetime to the startDate of its hour", () => {
  test("should return it startDate of its hour", () => {
    expect(startOfHourHandler(new Date("2019-09-08 19:12:12Z"))).toStrictEqual({
      hours: 0,
      minutes: 12,
      seconds: 12,
      totalWeeks: 0,
      totalHours: 0,
      totalMinutes: 12,
      totalSeconds: 732,
      totalMilliseconds: 732000,
    });
  });

  test("should return the startDate of its minute", () => {
    expect(startOfHourHandler(new Date("2019-09-08 21:19:56Z"))).toStrictEqual({
      hours: 0,
      minutes: 19,
      seconds: 56,
      totalWeeks: 0,
      totalHours: 0,
      totalMinutes: 19,
      totalSeconds: 1196,
      totalMilliseconds: 1196000,
    });
  });
});

describe("Handles difference from given datetime to the startDate of its day", () => {
  test("should return startDate of its day as an object", () => {
    expect(startOfDayHandler(new Date("2005-12-09 22:34:12Z"))).toStrictEqual({
      hours: 22,
      minutes: 34,
      seconds: 12,
      totalWeeks: 0,
      totalHours: 22,
      totalMinutes: 1354,
      totalSeconds: 81252,
      totalMilliseconds: 81252000,
    });
  });
});

describe("Handles difference from given datetime to the startDate of its week", () => {
  test("should return startDate of its week as an object", () => {
    expect(startOfWeekHandler(new Date("2005-12-09 22:34:12Z"))).toStrictEqual({
      days: 5,
      totalDays: -5,
      months: 0,
      totalMonths: 0,
      hours: 22,
      minutes: 34,
      seconds: 12,
      totalWeeks: 0,
      totalHours: 142,
      totalMinutes: 8554,
      totalSeconds: 513252,
      totalMilliseconds: 513252000,
      years: 0,
      weeks: 0,
    });
  });
});

describe("Handles difference from given datetime to the startDate of its month", () => {
  test("should return startDate of its month as an object", () => {
    expect(startOfMonthHandler(new Date("2005-12-09 22:34:12Z"))).toStrictEqual({
      days: 1,
      months: 0,
      weeks: 1,
      totalDays: -8,
      totalWeeks: 1,
      totalMonths: 0,
      hours: 22,
      minutes: 34,
      seconds: 12,
      totalHours: 214,
      totalMinutes: 12874,
      totalSeconds: 772452,
      totalMilliseconds: 772452000,
      years: 0,
    });
  });
});

describe("Handles difference from given datetime to the startDate of its quarter", () => {
  test("should return startDate of its quarter as an object", () => {
    expect(startOfQuarterHandler(new Date("2005-12-09 22:34:12Z"))).toStrictEqual({
      days: 1,
      months: 2,
      weeks: 1,
      totalDays: -69,
      totalWeeks: 9,
      totalMonths: 2,
      hours: 22,
      minutes: 34,
      seconds: 12,
      totalHours: 1678,
      totalMinutes: 100714,
      totalSeconds: 6042852,
      totalMilliseconds: 6042852000,
      years: 0,
    });
  });
});

describe("Handles difference from given datetime to the startDate of its year", () => {
  test("should return startDate of its year as an object", () => {
    expect(startOfYearHandler(new Date("2005-06-23 10:00:45Z"))).toStrictEqual({
      days: 1,
      months: 5,
      weeks: 3,
      totalDays: -173,
      totalWeeks: 24,
      totalMonths: 5,
      hours: 10,
      minutes: 0,
      seconds: 45,
      totalHours: 4162,
      totalMinutes: 249720,
      totalSeconds: 14983245,
      totalMilliseconds: 14983245000,
      years: 0,
    });
  });
});
