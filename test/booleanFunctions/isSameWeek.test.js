const isSameWeek = require("../../lib/isSameWeek");

describe("isSameWeek, returns on boolean, whether second given date is in the same week of the first", () => {
	test("should return false", () => {
		expect(isSameWeek(new Date("2019 01 01"), new Date("2018 12 25"))).toBe(
			false
		);
		expect(isSameWeek(new Date("2012 09 15"), new Date("2012 09 08"))).toBe(
			false
		);
		expect(isSameWeek(new Date("2018 02 14"), new Date("2018 02 09"))).toBe(
			false
		);
		expect(isSameWeek(new Date("2030 11 01"), new Date("2030 10 20"))).toBe(
			false
		);
		expect(
			isSameWeek(
				new Date("2019-12-12T20:19:00"),
				new Date("2019-12-01T20:19:00")
			)
		).toBe(false);
	});

	test("should return true", () => {
		expect(isSameWeek(new Date("2019 01 01"), new Date("2018 12 31"))).toBe(
			true
		);
		expect(isSameWeek(new Date("2012 09 15"), new Date("2012 09 09"))).toBe(
			true
		);
		expect(isSameWeek(new Date("2018 02 1"), new Date("2018 01 31"))).toBe(
			true
		);
		expect(isSameWeek(new Date("2030 11 11"), new Date("2030 11 16"))).toBe(
			true
		);
		expect(
			isSameWeek(
				new Date("2019-12-12T20:19:00"),
				new Date("2019-12-10T20:19:00")
			)
		).toBe(true);
	});

	test("should throw an error", () => {
		expect(() => {
			isSameWeek(Date.now(), null);
		}).toThrow(/Invalid Date/);

		expect(() => {
			isSameWeek(new Date("2019 09 05"), "");
		}).toThrow(/Invalid Date/);

		expect(() => {
			isSameWeek({}, Date.now());
		}).toThrow(/Invalid Date/);

		expect(() => {
			isSameWeek(new Date().toISOString(), Date.now());
		}).toThrow(/Invalid Date/);
	});
});
