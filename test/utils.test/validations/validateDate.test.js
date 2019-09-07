const validateDate = require("../../../lib/utils/validations/validateDate");

describe("Handles validation of date, and return true or false", () => {
	test("should return true", () => {
		expect(validateDate(new Date())).toBe(true);
		expect(validateDate(new Date(Date.now()))).toBe(true);
		expect(validateDate(new Date(2019, 9, 7, 23, 45, 9))).toBe(true);
		expect(validateDate(new Date("2019-02-09T23:56:34Z"))).toBe(true);
		expect(validateDate(new Date("2019-09-08 23:12:09"))).toBe(true);
		expect(validateDate(Date.now())).toBe(true);
		expect(validateDate(new Date("2019/09/09"))).toBe(true);
		expect(validateDate(new Date("2019-09-09"))).toBe(true);
		expect(validateDate(new Date("09 09 19"))).toBe(true);
		expect(validateDate(new Date("09 19 0099"))).toBe(true);
		expect(validateDate(new Date("2019,12,2"))).toBe(true);
		// because chromium browsers are crazy.
		expect(validateDate(new Date("2009.12.9"))).toBe(true);
		expect(validateDate(new Date("2019*12*2"))).toBe(true);
		expect(validateDate(new Date("2019=12=2"))).toBe(true);
		expect(validateDate(new Date("2016/3"))).toBe(true);
	});

	test("should return false", () => {
		expect(validateDate(new Date("19/09/09T23:23:23Z"))).toBe(false);
		expect(validateDate(new Date("2019 23 12"))).toBe(false);
		expect(validateDate(new Date("2019 23 9"))).toBe(false);
		expect(validateDate(new Date("19 03 2019"))).toBe(false);
		expect(validateDate({})).toBe(false);
		expect(validateDate(new Date("2010 07 09").toString())).toBe(false);
	});
});
