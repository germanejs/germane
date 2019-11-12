const validateDate = require("../index");
const germane = require("../../../../germane");

describe("Handles validation of date, and return true or false", () => {
  test("should return true", () => {
    // JavaScript Date Constructor Function.
    expect(validateDate(new Date())).toBe(true);
    expect(validateDate(new Date(Date.now()))).toBe(true);
    expect(validateDate(new Date(2019, 9, 7, 23, 45, 9))).toBe(true);
    expect(validateDate(new Date("2019-02-09T23:56:34Z"))).toBe(true);
    expect(validateDate(new Date("2019-09-08 23:12:09"))).toBe(true);
    expect(validateDate(Date.now())).toBe(true);
    expect(validateDate(new Date("2019/09/09"))).toBe(true);
    expect(validateDate(new Date("2019-09-09"))).toBe(true);
    expect(validateDate(new Date("09 09 19"))).toBe(true);
    expect(validateDate(new Date(germane("2019-11-11", "America/New_York")))).toBe(true);

    // Germane Date Helper Function.
    expect(validateDate(germane("2019-W11"))).toBe(true);
    expect(validateDate(germane("2019-W10-5"))).toBe(true);
    expect(validateDate(germane(-1546318800000))).toBe(true);
    expect(validateDate(germane("20190401"))).toBe(true);
    expect(validateDate(germane("20190111T091234Z"))).toBe(true);
    expect(validateDate(germane("2019-11-11 14:23:00.045Z"))).toBe(true);
    expect(validateDate(germane("/Date(1901750400000)/"))).toBe(true);
    expect(validateDate(germane("2099-11-11 23:11:11+0900"))).toBe(true);
    expect(validateDate(germane("Fri, 21 Nov 2019 00:00:00 +0900"))).toBe(true);
    expect(validateDate(germane("2015-345"))).toBe(true);
    expect(validateDate(germane())).toBe(true);
    expect(validateDate(germane(new Date("2019 09 09")))).toBe(true);
  });

  test("should return false", () => {
    expect(validateDate(new Date("19/09/09T23:23:23Z"))).toBe(false);
    expect(validateDate(new Date("2019 23 12"))).toBe(false);
    expect(validateDate(new Date("2019 23 9"))).toBe(false);
    expect(validateDate(new Date("19 03 2019"))).toBe(false);
    expect(validateDate({})).toBe(false);
    expect(validateDate(new Date("2010 07 09").toString())).toBe(false);

    expect(validateDate(germane("2019 09 09"))).toBe(false);
    expect(validateDate(germane("2019-11-45"))).toBe(false);
    expect(validateDate(germane("2019-366"))).toBe(false);
    expect(validateDate(germane({}))).toBe(false);
    expect(validateDate(germane("2019/11/11"))).toBe(false);
  });
});
