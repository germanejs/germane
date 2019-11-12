const {
  startOfHourHandler,
  startOfDayHandler,
  startOfWeekHandler,
  startOfMonthHandler,
  startOfQuarterHandler,
  startOfYearHandler,
  startOfMinuteHandler,
} = require("../index");
const germane = require("../../../../germane");

describe("Handles difference from given datetime to the current of its hour", () => {
  test("should return it current of its hour", () => {
    expect(startOfHourHandler(germane("2019-09-08 19:12:12Z", "UTC")).toISOString()).toEqual(
      "2019-09-08T19:00:00.000Z",
    );
  });
});
describe("Handles difference from given datetime to the current of its hour", () => {
  test("should return it current of its hour", () => {
    expect(startOfMinuteHandler(germane("2019-09-08 19:12:12Z", "UTC")).toISOString()).toEqual(
      "2019-09-08T19:12:00.000Z",
    );
  });

  test("should return the current of its minute", () => {
    expect(startOfHourHandler(germane("2019-09-08 21:19:56Z", "UTC")).toISOString()).toEqual(
      "2019-09-08T21:00:00.000Z",
    );
  });
});
describe("Handles difference from given datetime to the current of its day", () => {
  test("should return current of its day as an object", () => {
    expect(startOfDayHandler(germane("2005-12-09 22:34:12Z", "UTC")).toISOString()).toEqual(
      "2005-12-09T00:00:00.000Z",
    );
  });
});

describe("Handles difference from given datetime to the current of its week", () => {
  test("should return current of its week as an object", () => {
    // +09:00
    expect(startOfWeekHandler(germane("2005-12-09 22:34:12Z", "Asia/Seoul")).toISOString()).toEqual(
      "2005-12-03T15:00:00.000Z",
    );
  });
});

describe("Handles difference from given datetime to the current of its month", () => {
  test("should return current of its month as an object", () => {
    // -03:00
    expect(
      startOfMonthHandler(germane("2005-01-01 00:34:12Z", "America/Santiago")).toISOString(),
    ).toEqual("2004-12-01T03:00:00.000Z");
  });
});

describe("Handles difference from given datetime to the current of its quarter", () => {
  test("should return current of its quarter as an object", () => {
    expect(startOfQuarterHandler(germane("2005-12-09 22:34:12Z", "UTC")).toISOString()).toEqual(
      "2005-10-01T00:00:00.000Z",
    );
  });
});

describe("Handles difference from given datetime to the current of its year", () => {
  test("should return current of its year as an object", () => {
    expect(startOfYearHandler(germane("2005-06-23 10:00:45Z", "UTC")).toISOString()).toEqual(
      "2005-01-01T00:00:00.000Z",
    );
  });
});
