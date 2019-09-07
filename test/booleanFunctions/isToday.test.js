const isToday = require("../../lib/isToday");

describe("isToday, compares given date to local current date and returns a boolean, on whether given date is same as the local date", () => {
	test("should return true", () => {
		expect(isToday(Date.now())).toBe(true);
		expect(isToday(new Date())).toBe(true);
	});

	// may return true depending on your machine's date time.
	test("should return false", () => {
		expect(isToday(new Date("2010 01 01"))).toBe(false);
		expect(isToday(new Date("1970 01 01"))).toBe(false);
	});
	test("should throw an error", () => {
		expect(() => {
			isToday(null);
		}).toThrow(/Invalid Date/);

		expect(() => {
			isToday("");
		}).toThrow(/Invalid Date/);

		expect(() => {
			isToday({});
		}).toThrow(/Invalid Date/);

		expect(() => {
			isToday(new Date().toISOString());
		}).toThrow(/Invalid Date/);
	});
});
