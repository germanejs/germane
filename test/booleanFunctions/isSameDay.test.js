const isSameDay = require("../../lib/isSameDay");

describe("isSameDay, checks if given dates are the same", () => {
	test("should return true", () => {
		expect(isSameDay(new Date(), new Date())).toBe(true);
		expect(isSameDay(new Date("2018 12 31"), new Date("2018 12 31"))).toBe(
			true
		);
		expect(
			isSameDay(new Date("1000 01 01"), new Date("1000 01 01 09:12:12"))
		).toBe(true);
		expect(isSameDay(Date.now(), Date.now())).toBe(true);
		expect(
			isSameDay(new Date("2016-09-15T20:18:00"), new Date("2016 09 15"))
		).toBe(true);

		expect(isSameDay(new Date(), Date.now())).toBe(true);
	});

	test("should return false", () => {
		expect(isSameDay(new Date("2019 06 11"), new Date("2020 09 12"))).toBe(
			false
		);
		expect(isSameDay(new Date("2018 12 31"), new Date("2018 12 30"))).toBe(
			false
		);
		expect(
			isSameDay(
				new Date("1000 01 01 09:12:12"),
				new Date("1001 01 01 09:12:12")
			)
		).toBe(false);
		expect(isSameDay(Date.now(), -2187648816000)).toBe(false);
		expect(
			isSameDay(new Date("2016-09-15T20:18:00"), new Date("2016 09 11"))
		).toBe(false);
	});
	test("should throw an error", () => {
		expect(() => {
			isSameDay(Date.now(), null);
		}).toThrow(/Invalid Date/);

		expect(() => {
			isSameDay(new Date("2019 09 05"), "");
		}).toThrow(/Invalid Date/);

		expect(() => {
			isSameDay({}, Date.now());
		}).toThrow(/Invalid Date/);

		expect(() => {
			isSameDay(new Date().toISOString(), Date.now());
		}).toThrow(/Invalid Date/);
	});
});
