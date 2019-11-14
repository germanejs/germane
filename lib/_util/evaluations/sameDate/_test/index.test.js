const sameDate = require("../index");
const germane = require("../../../../germane");

describe("Performs check on whethers two given dates are the same, returns true or false", () => {
  test("should return false", () => {
    expect(sameDate(new Date(Date.now()), new Date("2019 01 08"))).toBe(false);
    expect(sameDate(new Date("1990 12 23"), new Date("1999 12 23"))).toBe(false);
  });

  test("should return true", () => {
    expect(sameDate(germane("2019-11-11 23:11:45Z", "UTC"), germane("2019-11-11", "UTC"))).toBe(
      true,
    );
    expect(sameDate(new Date("2010-09-07"), new Date("2010-09-07"))).toBe(true);
  });
});
