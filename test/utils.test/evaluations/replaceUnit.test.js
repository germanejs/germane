const replaceUnit = require("../../../lib/utils/evaluations/replaceUnit");

describe("Replace Unit replaces the unit of a time in a given date and returns an iso string", () => {
  test("should return 2019-01-12T18:19:23.304Z", () => {
    expect(
      replaceUnit(new Date("2020-11-11 23:11:11Z"), {
        year: 2019,
        month: 1,
        day: 12,
        hour: 18,
        minute: 19,
        second: 23,
        ms: 304,
      }),
    ).toBe("2019-01-12T18:19:23.304Z");
  });

  test("should return 2019-01-11T15:19:11.304Z", () => {
    expect(replaceUnit(new Date("2019-01-11 13:11:11.304Z"), { hour: 15, minute: 19 })).toBe(
      "2019-01-11T15:19:11.304Z",
    );
  });
});
