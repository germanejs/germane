const {
  endOfQuarterHandler,
  endOfMonthHandler,
  endOfDayHandler,
  endOfHourHandler,
  endOfWeekHandler,
  endOfYearHandler,
  endOfMinuteHandler,
} = require("../index");
const germane = require("../../../../germane");

test("should return an object with date relating to its quarter in year", () => {
  expect(endOfQuarterHandler(germane("2019-08-20", "UTC")).toISOString()).toEqual(
    "2019-09-30T23:59:59.999Z",
  );
});

test("should return an object with date relating to the end of year", () => {
  expect(endOfYearHandler(germane("2019-08-20", "UTC")).toISOString()).toEqual(
    "2019-12-31T23:59:59.999Z",
  );
});

test("should return an object with date relating to the end of month", () => {
  expect(endOfMonthHandler(germane("2019-08-20", "UTC")).toISOString()).toEqual(
    "2019-08-31T23:59:59.999Z",
  );
});

test("should return an object with date relating to the end of week", () => {
  expect(endOfWeekHandler(germane("2019-08-20", "UTC")).toISOString()).toEqual(
    "2019-08-24T23:59:59.999Z",
  );
});
test("should return an object with date relating to the end of day", () => {
  expect(endOfDayHandler(germane("2019-08-20 18:23:19Z", "UTC")).toISOString()).toEqual(
    "2019-08-20T23:59:59.999Z",
  );
});
test("should return an object with date relating to the end of hour", () => {
  expect(endOfHourHandler(germane("2019-08-20 13:12:34Z", "UTC")).toISOString()).toEqual(
    "2019-08-20T13:59:59.999Z",
  );
});

test("explicit test for end of week", () => {
  expect(endOfWeekHandler(germane("2019-08-24 12:34:09Z", "UTC")).toISOString()).toEqual(
    "2019-08-24T23:59:59.999Z",
  );
});

test("explicit test for end of month", () => {
  expect(endOfMonthHandler(germane("2019-08-29 12:34:09Z", "UTC")).toISOString()).toEqual(
    "2019-08-31T23:59:59.999Z",
  );
});

test("explicit test for end of year", () => {
  expect(endOfYearHandler(germane("2019-12-29 12:34:09Z", "UTC")).toISOString()).toEqual(
    "2019-12-31T23:59:59.999Z",
  );
});

// +08:00
test("explicit test for end of quarter", () => {
  expect(
    endOfQuarterHandler(germane("2019-12-29 12:34:09Z", "Asia/Hong_Kong")).toISOString(),
  ).toEqual("2019-12-31T15:59:59.999Z");
});

// -05:00
test("explicit test for end of day", () => {
  expect(endOfDayHandler(germane("2019-12-29 12:34:09Z", "America/Havana")).toISOString()).toEqual(
    "2019-12-30T04:59:59.999Z",
  );
});

// +01:00
test("explicit test for end of day", () => {
  expect(
    endOfMinuteHandler(germane("2019-12-29 12:34:09Z", "Africa/Casablanca")).toISOString(),
  ).toEqual("2019-12-29T12:34:59.999Z");
});
