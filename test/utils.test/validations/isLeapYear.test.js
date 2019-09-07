const isLeapYear = require("../../../lib/utils/validations/isLeapYear");

describe("checks if a given year is a leap year, returns true or false depending on the given value", () => {
	test("should return true", () => {
		expect(isLeapYear(2000)).toBe(true);
		expect(isLeapYear(2020)).toBe(true);
		expect(isLeapYear(180)).toBe(true);
	});
	test("should return false", () => {
		expect(isLeapYear(2019)).toBe(false);
		expect(isLeapYear(1893)).toBe(false);
		expect(isLeapYear(1989)).toBe(false);
	});
});
