const isSameDate = require("../../../lib/utils/evaluations/isSameDate");

describe("Performs check on whethers two given dates are the same, returns true or false", () => {
	test("should return false", () => {
		expect(isSameDate(new Date(Date.now()), new Date("2019 01 08"))).toBe(
			false
		);
		expect(isSameDate(new Date("1990 12 23"), new Date("1999 12 23"))).toBe(
			false
		);
	});

	test("should return true", () => {
		expect(isSameDate(new Date(Date.now()), new Date(Date.now()))).toBe(
			true
		);
		expect(isSameDate(new Date("2010 09 07"), new Date("2010 08 07")));
	});
});
