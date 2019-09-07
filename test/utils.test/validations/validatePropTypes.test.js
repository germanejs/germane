const {isDateOrNumber, isDate, isFunc, isBool, isString, isNumber, isArray, isObject} = require("../../../lib/utils/validations/validatePropTypes");

describe("Validations for property types or parameters to date functions", () => {
  test("should return true", () => {
    expect(isDateOrNumber(new Date())).toBe(true)
    expect(isDateOrNumber(Date.now())).toBe(true)
    expect(isDate(new Date())).toBe(true);
    expect(isFunc(function(){ return false})).toBe(true);
    expect(isFunc(Function)).toBe(true);
    expect(isFunc(isFunc)).toBe(true);
    expect(isBool(false)).toBe(true);
    expect(isString("")).toBe(true);
    expect(isString(String(89))).toBe(true);
    expect(isNumber(89)).toBe(true);
    expect(isNumber(Number("45"))).toBe(true);
    expect(isArray([])).toBe(true);
    expect(isArray(Array(45))).toBe(true);
    expect(isObject({})).toBe(true)
  })
  
  test("Should return false", () => {
      expect(isDateOrNumber("")).toBe(false);
      expect(isDateOrNumber(null)).toBe(false);
      expect(isDateOrNumber({})).toBe(false);
      expect(isDateOrNumber([])).toBe(false);
      expect(isDateOrNumber(undefined)).toBe(false)
      expect(isDateOrNumber(true)).toBe(false)
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
      expect(isString(undefined)).toBe(false)
      expect(isString(true)).toBe(false)
      expect(isString(new Date())).toBe(false);
      expect(isNumber("")).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber([])).toBe(false);
      expect(isNumber(undefined)).toBe(false)
      expect(isNumber(true)).toBe(false)
      expect(isObject("")).toBe(false);
      expect(isObject(null)).toBe(false);
      expect(isObject(90)).toBe(false);
      expect(isObject([])).toBe(false);
      expect(isObject(undefined)).toBe(false)
      expect(isObject(true)).toBe(false)
      expect(isObject(function hello(){ return "Hello"})).toBe(false)
      expect(isFunc("")).toBe(false);
      expect(isFunc(null)).toBe(false);
      expect(isFunc({})).toBe(false);
      expect(isFunc([])).toBe(false);
      expect(isFunc(undefined)).toBe(false)
      expect(isFunc(true)).toBe(false)
  })
  
})
