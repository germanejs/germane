const isValid = require("../../lib/isValid");

describe("isValid, validates a date object", () => {
	test("should return true", () => {
		expect(isValid(new Date())).toBe(true);
		expect(isValid(new Date("2019-09-12T12:09:18.670Z"))).toBe(true);
		expect(isValid(new Date(1200, 1, 12, 14, 13, 4, 200))).toBe(true);
		expect(isValid(new Date("2000/01/01"))).toBe(true);
		expect(isValid(new Date(Date.now()))).toBe(true);
	});

	test("should return false", () => {
		expect(isValid(new Date(""))).toBe(false);
		expect(isValid(new Date("2019-9-2T12:09:18.670Z"))).toBe(false);
		expect(isValid(new Date("1200, 13, 23, 14, 13, 4, 200"))).toBe(false);
		expect(isValid(new Date("2000/01/01").toJSON())).toBe(false);
		expect(isValid(Date.now)).toBe(false);
		expect(isValid(null)).toBe(false);
		expect(isValid(undefined)).toBe(false);
		expect(isValid(new Date("19, 19, 19"))).toBe(false);
	});
});
