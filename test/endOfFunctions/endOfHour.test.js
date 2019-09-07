const endOfHour = require("../../lib/endOfHour");

describe("endOfHour returns the difference from now(date and time given) to the end of its hour", () => {
	test("should return in {Minutes | Seconds}", () => {
		expect(endOfHour(new Date("1999-05-18T23:19:45Z"))).toBe(
			"In 40 minutes"
		);
		expect(endOfHour(new Date("2019 09 09 12:00:01"))).toBe(
			"In 59 minutes"
		);
		expect(endOfHour(new Date("2019 11 23 23:59:59"))).toBe("In 0 second");
		expect(endOfHour(new Date("1900 01 18 14:13:12.999"))).toBe(
			"In 46 minutes"
		);
		expect(endOfHour(new Date("1890 07 04 21:01:01"))).toBe(
			"In 58 minutes"
		);
	});

	test("should throw an error", () => {
		expect(() => {
			endOfHour(new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfHour(new Date("2019 19 09 23:12:01"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			endOfHour(new Date("2019 09 09 00:00:00").toISOString());
		}).toThrow(/Invalid Date/);
	});
});
