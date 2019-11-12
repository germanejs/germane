const epoch = require("../index");

describe("epoch returns a timestamp after calculating the given date units", () => {
  test("should return -11649268828000", () => {
    expect(epoch(1600, 11, 6, 11, 59, 32, 0, 0)).toBe(-11649268828000);
  });
  test("should return 1641906716990", () => {
    expect(epoch(2022, 1, 11, 13, 11, 56, 990, 0)).toBe(1641906716990);
  });
  test("should return -1561781323761", () => {
    expect(epoch(1920, 7, 5, 19, 51, 16, 239, 0)).toBe(-1561781323761);
  });
  test("should return -1561745323761", () => {
    expect(epoch(1920, 7, 5, 19, 51, 16, 239, 600)).toBe(-1561745323761);
  });
  test("should return 951832801080", () => {
    expect(epoch(2000, 2, 29, 14, 0, 1, 80, 0)).toBe(951832801080);
  });
});
