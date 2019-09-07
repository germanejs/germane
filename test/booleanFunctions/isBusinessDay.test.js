const isBusinessDay = require("../../lib/isBusinessDay");

describe("isBusinessDay, returns on boolean, whether second given date is a  business day", () => {
	test("should return false", () => {
		expect(isBusinessDay(new Date("2019 12 01"))).toBe(false);
		expect(isBusinessDay(new Date("2012 09 15"))).toBe(false);
		expect(isBusinessDay(new Date("2018 02 11"))).toBe(false);
		expect(isBusinessDay(new Date("2030 11 02"))).toBe(false);
		expect(isBusinessDay(new Date("2019-12-15T20:19:00"))).toBe(false);
	});

	test("should return true", () => {
		expect(isBusinessDay(new Date("2019 12 05"))).toBe(true);
		expect(isBusinessDay(new Date("2012 09 18"))).toBe(true);
		expect(isBusinessDay(new Date("2018 02 14"))).toBe(true);
		expect(isBusinessDay(new Date("2027 07 05"))).toBe(true);
		expect(isBusinessDay(new Date("2027-12-31T20:19:00"))).toBe(true);
	});

	test("should throw an error", () => {
		expect(() => {
			isBusinessDay(null);
		}).toThrow(/Invalid Date/);

		expect(() => {
			isBusinessDay(new Date("2019 19 19"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			isBusinessDay({});
		}).toThrow(/Invalid Date/);

		expect(() => {
			isBusinessDay(new Date().toISOString());
		}).toThrow(/Invalid Date/);
	});
});
