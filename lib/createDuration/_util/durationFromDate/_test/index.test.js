const durationFromDate = require("../index");

// @ts-ignore
describe("Creates a duration given a date array of two values", () => {
  // @ts-ignore
  test("should return -67251540000", () => {
    // @ts-ignore
    expect(durationFromDate([new Date("2014-01-10"), new Date("2011-11-23 15:01Z")])).toBe(
      -67251540000,
    );
  });
  // @ts-ignore
  test("should return 31812720000", () => {
    // @ts-ignore
    expect(durationFromDate([new Date("1900-11-20 10:09Z"), new Date("1901-11-23 15:01Z")])).toBe(
      31812720000,
    );
  });
  // @ts-ignore
  test("should return 60000000000", () => {
    // @ts-ignore
    expect(durationFromDate([230013333000, 290013333000])).toBe(60000000000);
  });
});
