const isNextDay = require("../../lib/isNextDay");

describe("isNextDay, checks if second is next after first", () => {
	test("should return true", () => {
		expect(isNextDay(new Date(), Date.now() + 1 * 24 * 1000 * 3600)).toBe(
			true
		);
		expect(isNextDay(new Date("2018 12 31"), new Date("2019 01 01"))).toBe(
			true
		);
		expect(
			isNextDay(new Date("999 01 01"), new Date("999 01 02 09:12:12"))
		).toBe(true);
		expect(isNextDay(new Date("1970 01 01"), new Date("1970 01 02"))).toBe(
			true
		);
		expect(
			isNextDay(new Date("2016-09-15T20:18:00"), new Date("2016 09 16"))
		).toBe(true);

		expect(isNextDay(-2187648816000, -2187562416000)).toBe(true);
	});

	test("should return false", () => {
		expect(isNextDay(new Date("2019 06 11"), new Date("2020 09 12"))).toBe(
			false
		);
		expect(isNextDay(new Date("2018 12 31"), new Date("2018 12 30"))).toBe(
			false
		);
		expect(
			isNextDay(
				new Date("1000 01 01 09:12:12"),
				new Date("1000 01 01 09:12:12")
			)
		).toBe(false);
		expect(isNextDay(Date.now(), Date.now())).toBe(false);
		expect(
			isNextDay(new Date("2016-09-15T20:18:00"), new Date("2016 09 15"))
		).toBe(false);
	});
	test("should throw an error", () => {
		expect(() => {
			isNextDay(Date.now(), null);
		}).toThrow(/Invalid Date/);

		expect(() => {
			isNextDay(new Date("2019 09 05"), "");
		}).toThrow(/Invalid Date/);

		expect(() => {
			isNextDay({}, Date.now());
		}).toThrow(/Invalid Date/);

		expect(() => {
			isNextDay(new Date().toISOString(), Date.now());
		}).toThrow(/Invalid Date/);
	});
});
