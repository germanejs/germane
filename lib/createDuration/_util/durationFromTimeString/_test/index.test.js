// @ts-nocheck
const durationFromTimeString = require("../index");

describe("Creates a duration given a time string", () => {
  test("should return 82800000", () => {
    expect(durationFromTimeString("23")).toBe(82800000);
  });

  test("should return 40140000", () => {
    expect(durationFromTimeString("11:09")).toBe(40140000);
  });

  test("should return 7050000", () => {
    expect(durationFromTimeString("01:56:90")).toBe(7050000);
  });

  test("should return 83351900", () => {
    expect(durationFromTimeString("23:09:11.900")).toBe(83351900);
  });
});
