const parseISO = require("../index");

describe("ParseISO function parses ISO and RFC5822 or 2822 strings and returns a timestamp", () => {
  test("should return 1901109030910", () => {
    expect(parseISO("2030-03-30T13:50:30.910Z")).toBe(1901109030910);
  });

  test("should return 1901109030000", () => {
    expect(parseISO("20300330T135030Z")).toBe(1901109030000);
  });

  test("should return 134509120000", () => {
    expect(parseISO("/Date(134509120000)/")).toBe(134509120000);
  });

  test("should return 1901112630000", () => {
    expect(parseISO("Sat, 30 Mar 2030 14:50:30 +0000")).toBe(1901112630000);
  });

  test("should return 1901750400000", () => {
    expect(parseISO("2030-W14-7")).toBe(1901750400000);
  });

  test("should return 1901232000000", () => {
    expect(parseISO("2030-W14")).toBe(1901232000000);
  });
  test("should return 1449705600000", () => {
    expect(parseISO("2015-344")).toBe(1449705600000);
  });
  test("should return 1901109000000", () => {
    expect(parseISO("2030-03-30T13:50Z")).toBe(1901109000000);
  });
});
