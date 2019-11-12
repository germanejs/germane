const prioritise = require("../index");

describe("Prioritises object keys according to given array, returns the first one if its value > 0, else it moves to the next", () => {
  test("should return 1 month", () => {
    expect(
      prioritise(
        {
          month: 1,
          week: 2,
          day: 4,
          hours: 0,
          minute: 0,
        },
        ["month", "week", "day", "hour", "minute"],
      ),
    ).toStrictEqual([1, "month"]);
  });

  test("should return null", () => {
    expect(
      prioritise(
        {
          month: 0,
          week: 0,
          day: 0,
          hour: 0,
          minute: 0,
        },
        ["month", "week", "day", "hour", "minute"],
      ),
    ).toStrictEqual([0, "minute"]);
  });

  test("should return 345 hour", () => {
    expect(
      prioritise(
        {
          month: 0,
          week: 0,
          day: 0,
          hour: 0,
          minute: 0,
          totalHour: 345,
        },
        ["totalHour", "hour"],
      ),
    ).toStrictEqual([345, "hour"]);
  });

  test("should return 15 week", () => {
    expect(prioritise({ totalWeek: 15 }, ["totalWeek"])).toStrictEqual([15, "week"]);
  });
});
