const {
  isDateOrNumber,
  isDate,
  isFunc,
  isBool,
  isString,
  isNumber,
  isArray,
  isObject,
  isGermane,
  isTrue,
  validateISO,
} = require("../../../lib/utils/validations/validatePropTypes");
const germane = require("../../../lib/germane");
describe("Validations for property types or parameters to date functions", () => {
  test("should return true", () => {
    expect(isDateOrNumber(new Date())).toBe(true);
    expect(isDateOrNumber(Date.now())).toBe(true);

    expect(isDate(new Date())).toBe(true);

    expect(
      isFunc(function () {
        return false;
      }),
    ).toBe(true);
    expect(isFunc(Function)).toBe(true);
    expect(isFunc(isFunc)).toBe(true);

    expect(isBool(false)).toBe(true);

    expect(isString("")).toBe(true);
    expect(isString(String(89))).toBe(true);

    expect(isNumber(89)).toBe(true);
    expect(isNumber(Number("45"))).toBe(true);

    expect(isArray([])).toBe(true);
    expect(isArray(Array(45))).toBe(true);

    expect(isObject({})).toBe(true);

    expect(isGermane(germane(Date.now()))).toBe(true);
    expect(isGermane(germane("2019-11-11"))).toBe(true);
  });

  test("Should return false", () => {
    expect(isDateOrNumber("")).toBe(false);
    expect(isDateOrNumber(null)).toBe(false);
    expect(isDateOrNumber([])).toBe(false);
    expect(isDateOrNumber(undefined)).toBe(false);
    expect(isDateOrNumber(true)).toBe(false);

    expect(isDate({})).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(990)).toBe(false);
    expect(isDate("")).toBe(false);

    expect(isArray("")).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(true)).toBe(false);

    expect(isBool([])).toBe(false);
    expect(isBool({})).toBe(false);
    expect(isBool("Hello World")).toBe(false);
    expect(isBool(null)).toBe(false);
    expect(isBool(undefined)).toBe(false);

    expect(isString(89)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(new Date())).toBe(false);

    expect(isNumber("")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(true)).toBe(false);

    expect(isObject("")).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(90)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(
      isObject(function hello() {
        return "Hello";
      }),
    ).toBe(false);

    expect(isFunc("")).toBe(false);
    expect(isFunc(null)).toBe(false);
    expect(isFunc({})).toBe(false);
    expect(isFunc([])).toBe(false);
    expect(isFunc(undefined)).toBe(false);
    expect(isFunc(true)).toBe(false);

    expect(isGermane({})).toBe(false);
    expect(isGermane(new Date())).toBe(false);
    expect(isGermane({ now: Date.now(), name: "germane" })).toBe(false);
    expect(isGermane(null)).toBe(false);
    expect(isGermane("2019-09-09T23:11:23.900Z")).toBe(false);
  });
});

describe("ValidateISO function validates ISO or RFC5822 or 2822 strings and returns a object of boolean values", () => {
  test("should return 1901109030910", () => {
    expect(validateISO("2030-03-30T13:50:30.910Z")).toStrictEqual({
      isExpanded: true,
      isBasic: false,
      isASP: false,
      isRFC: false,
      isWeekNumberingYear: false,
      isWeekDate: false,
      isOrdinal: false,
      nonExpandedOrBasic: false,
    });
  });
  test("should return 1901109030910", () => {
    expect(validateISO("2030-03-30T13:50:30+0300")).toStrictEqual({
      isExpanded: true,
      isBasic: false,
      isASP: false,
      isRFC: false,
      isWeekNumberingYear: false,
      isWeekDate: false,
      isOrdinal: false,
      nonExpandedOrBasic: false,
    });
  });
  test("should return 1901109030000", () => {
    expect(validateISO("20300330T135030Z")).toStrictEqual({
      isExpanded: false,
      isBasic: true,
      isASP: false,
      isRFC: false,
      isWeekNumberingYear: false,
      isWeekDate: false,
      isOrdinal: false,
      nonExpandedOrBasic: false,
    });
  });

  test("should return 134509120000", () => {
    expect(validateISO("/Date(134509120000)/")).toStrictEqual({
      isExpanded: false,
      isBasic: false,
      isASP: true,
      isRFC: false,
      isWeekNumberingYear: false,
      isWeekDate: false,
      isOrdinal: false,
      nonExpandedOrBasic: true,
    });
  });

  test("should return 1901109030000", () => {
    expect(validateISO("Sat, 30 Mar 2030 14:50:30")).toStrictEqual({
      isExpanded: false,
      isBasic: false,
      isASP: false,
      isRFC: true,
      isWeekNumberingYear: false,
      isWeekDate: false,
      isOrdinal: false,
      nonExpandedOrBasic: false,
    });
  });

  test("should return 1901750400000", () => {
    expect(validateISO("2030-W14-7")).toStrictEqual({
      isExpanded: false,
      isBasic: false,
      isASP: false,
      isRFC: false,
      isWeekNumberingYear: true,
      isWeekDate: false,
      isOrdinal: false,
      nonExpandedOrBasic: true,
    });
  });

  test("should return 1901232000000", () => {
    expect(validateISO("2030-W14")).toStrictEqual({
      isExpanded: false,
      isBasic: false,
      isASP: false,
      isRFC: false,
      isWeekNumberingYear: false,
      isWeekDate: true,
      isOrdinal: false,
      nonExpandedOrBasic: true,
    });
  });
  test("should return 1449705600000", () => {
    expect(validateISO("2015-344")).toStrictEqual({
      isExpanded: false,
      isBasic: false,
      isASP: false,
      isRFC: false,
      isWeekNumberingYear: false,
      isWeekDate: false,
      isOrdinal: true,
      nonExpandedOrBasic: true,
    });
  });
});

describe("isTrue validates an input and returns a boolean value", () => {
  test("should return true", () => {
    expect(isTrue(4 === 4)).toBe(true);
    expect(isTrue(true)).toBe(true);
    expect(isTrue(isArray([1, false, null, undefined, { y: "hello world" }, "Hello World"])));
    expect(isTrue(validateISO("2015-233").isOrdinal)).toBe(true);
  });

  test("should return false", () => {
    expect(isTrue(5 === 1)).toBe(false);
    expect(isBool(45)).toBe(false);
    expect(isTrue(validateISO("2019-11").isASP)).toBe(false);
  });
});
