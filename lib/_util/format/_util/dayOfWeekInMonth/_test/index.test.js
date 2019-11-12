const dayOfWeekInMonth = require("../index");

describe("dayOfWeekInMonth returns the current ordinal of the day of week in its month", () => {
  test("should 2", () => {
    expect(dayOfWeekInMonth(new Date("2019-10-11"))).toBe(2);
  });
  test("should 3", () => {
    expect(dayOfWeekInMonth(new Date("2002-02-16"))).toBe(3);
  });
  test("should 5", () => {
    expect(dayOfWeekInMonth(new Date("1976-06-30"))).toBe(5);
  });
});
