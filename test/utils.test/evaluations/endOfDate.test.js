const {
  endOfQuarterHandler,
  endOfMonthHandler,
  endOfDayHandler,
  endOfHourHandler,
  endOfWeekHandler,
  endOfYearHandler,
} = require("../../../lib/utils/evaluations/endOfDateHandlers");

test("should return an object with date relating to its quarter in year", () => {
  const x = {
    hours: 23,
    minutes: 59,
    seconds: 59,
    totalWeeks: 5,
    totalHours: 1007,
    totalMinutes: 60479,
    totalSeconds: 3628799,
    totalMilliseconds: 3628799999,
    years: 0,
    months: 1,
    weeks: 1,
    days: 3,
    totalDays: 41,
    totalMonths: 1,
  };
  expect(endOfQuarterHandler(new Date("2019-08-20"))).toStrictEqual(x);
});

test("should return an object with date relating to the end of year", () => {
  const x = {
    totalMilliseconds: 11577599999,

    hours: 23,
    minutes: 59,
    seconds: 59,
    totalWeeks: 19,
    totalHours: 3215,
    totalMinutes: 192959,
    totalSeconds: 11577599,
    years: 0,
    months: 4,
    weeks: 1,
    days: 4,
    totalDays: 133,
    totalMonths: 4,
  };
  expect(endOfYearHandler(new Date("2019-08-20"))).toStrictEqual(x);
});

test("should return an object with date relating to the end of month", () => {
  const x = {
    totalMilliseconds: 1036799999,

    hours: 23,
    minutes: 59,
    seconds: 59,
    totalWeeks: 1,
    totalHours: 287,
    totalMinutes: 17279,
    totalSeconds: 1036799,
    years: 0,
    months: 0,
    weeks: 1,
    days: 4,
    totalDays: 11,
    totalMonths: 0,
  };
  expect(endOfMonthHandler(new Date("2019-08-20"))).toStrictEqual(x);
});

test("should return an object with date relating to the end of week", () => {
  const x = {
    hours: 23,
    minutes: 59,
    seconds: 59,
    totalMilliseconds: 431999999,
    totalWeeks: 0,
    totalHours: 119,
    totalMinutes: 7199,
    totalSeconds: 431999,
    years: 0,
    months: 0,
    weeks: 0,
    days: 4,
    totalDays: 4,
    totalMonths: 0,
  };
  expect(endOfWeekHandler(new Date("2019-08-20"))).toStrictEqual(x);
});
test("should return an object with date relating to the end of day", () => {
  const x = {
    hours: 5,
    minutes: 36,
    seconds: 40,
    totalMilliseconds: 20200999,
    totalWeeks: 0,
    totalHours: 5,
    totalMinutes: 336,
    totalSeconds: 20200,
  };
  expect(endOfDayHandler(new Date("2019-08-20 18:23:19Z"))).toStrictEqual(x);
});
test("should return an object with date relating to the end of hour", () => {
  const x = {
    totalMilliseconds: 2845999,

    hours: 0,
    minutes: 47,
    seconds: 25,

    totalHours: 0,
    totalWeeks: 0,
    totalMinutes: 47,
    totalSeconds: 2845,
  };
  expect(endOfHourHandler(new Date("2019-08-20 13:12:34Z"))).toStrictEqual(x);
});

test("explicit test for end of week", () => {
  const x = {
    hours: 11,
    minutes: 25,
    seconds: 50,
    totalWeeks: 0,
    totalHours: 11,
    totalMinutes: 685,
    totalSeconds: 41150,
    totalMilliseconds: 41150999,
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    totalDays: 0,
    totalMonths: 0,
  };
  expect(endOfWeekHandler(new Date("2019-08-24 12:34:09Z"))).toStrictEqual(x);
});

test("explicit test for end of month", () => {
  const x = {
    hours: 11,
    minutes: 25,
    seconds: 50,
    totalWeeks: 0,
    totalHours: 59,
    totalMinutes: 3565,
    totalSeconds: 213950,
    totalMilliseconds: 213950999,
    years: 0,
    months: 0,
    weeks: 0,
    days: 2,
    totalDays: 2,
    totalMonths: 0,
  };
  expect(endOfMonthHandler(new Date("2019-08-29 12:34:09Z"))).toStrictEqual(x);

  // testing for other ending date values with the given date above, will either return a small value or a higher value with respect to the expected result(x) above.
});

test("explicit test for end of year", () => {
  const x = {
    hours: 11,
    minutes: 25,
    seconds: 50,
    totalWeeks: 0,
    totalHours: 59,
    totalMinutes: 3565,
    totalSeconds: 213950,
    totalMilliseconds: 213950999,
    years: 0,
    months: 0,
    weeks: 0,
    days: 2,
    totalDays: 2,
    totalMonths: 0,
  };
  expect(endOfYearHandler(new Date("2019-12-29 12:34:09Z"))).toStrictEqual(x);

  // testing for other ending date values with the given date above, will either return a small value or a higher value with respect to the expected result(x) above.
});

test("explicit test for end of quarter", () => {
  const x = {
    hours: 11,
    minutes: 25,
    seconds: 50,
    totalWeeks: 0,
    totalHours: 59,
    totalMinutes: 3565,
    totalSeconds: 213950,
    totalMilliseconds: 213950999,
    years: 0,
    months: 0,
    weeks: 0,
    days: 2,
    totalDays: 2,
    totalMonths: 0,
  };
  expect(endOfQuarterHandler(new Date("2019-12-29 12:34:09Z"))).toStrictEqual(x);

  // testing for other ending date values with the given date above, will either return a small value or a higher value with respect to the expected result(x) above.
});

test("explicit test for end of day", () => {
  const x = {
    hours: 11,
    minutes: 25,
    seconds: 50,
    totalMilliseconds: 41150999,
    totalWeeks: 0,
    totalHours: 11,
    totalMinutes: 685,
    totalSeconds: 41150,
  };
  expect(endOfDayHandler(new Date("2019-12-29 12:34:09Z"))).toStrictEqual(x);

  // testing for other ending date values with the given date above, will either return a small value or a higher value with respect to the expected result(x) above.
});
