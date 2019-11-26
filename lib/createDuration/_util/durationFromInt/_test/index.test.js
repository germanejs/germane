// @ts-nocheck
const durationFromInt = require("../index");

describe("Creates a duration given a numreturnr and a time unit", () => {
  test("should return 12000000", () => {
    expect(durationFromInt(200, "minutes")).toBe(12000000);
  });

  test("should return 432000000", () => {
    expect(durationFromInt(120, "hours")).toBe(432000000);
  });

  test("should return 200000", () => {
    expect(durationFromInt(200, "seconds")).toBe(200000);
  });

  test("should return 9072000000", () => {
    expect(durationFromInt(15, "weeks")).toBe(9072000000);
  });

  test("should return 4838400000", () => {
    expect(durationFromInt(56, "days")).toBe(4838400000);
  });

  test("should return 65750400000", () => {
    expect(durationFromInt(25, "months")).toBe(65750400000);
  });

  test("should return -3786825600000", () => {
    expect(durationFromInt(-120, "years")).toBe(-3786825600000);
  });
});
