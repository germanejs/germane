// @ts-nocheck
const durationFromISO = require("../index");

describe("Creates a duration from an iso duration string", () => {
  test("should return 378691200000", () => {
    expect(durationFromISO("P12Y")).toBe(378691200000);
  });

  test("should return 43200000", () => {
    expect(durationFromISO("PT12H")).toBe(43200000);
  });

  test("should return 840000", () => {
    expect(durationFromISO("PT14M")).toBe(840000);
  });

  test("should return 200000", () => {
    expect(durationFromISO("PT200S")).toBe(200000);
  });

  test("should return 127800000", () => {
    expect(durationFromISO("PT34H90M")).toBe(127800000);
  });

  test("should return 43815000", () => {
    expect(durationFromISO("PT12H11M-45S")).toBe(43815000);
  });

  test("should return 31536000000", () => {
    expect(durationFromISO("P12M")).toBe(31536000000);
  });

  test("should return 1036800000", () => {
    expect(durationFromISO("P12D")).toBe(1036800000);
  });

  test("should return 394329600000", () => {
    expect(durationFromISO("P12Y6M")).toBe(394329600000);
  });

  test("should return 472089600000", () => {
    expect(durationFromISO("P12Y6M900D")).toBe(472089600000);
  });

  test("should return 472133415000", () => {
    expect(durationFromISO("P12Y6M900DT12H11M-45S")).toBe(472133415000);
  });
});
