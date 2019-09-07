const differenceInMonths = require("../../lib/differenceInMonths");

describe("differenceInMonths returns the difference between two dates in human readable form", () => {
	test("should return the difference in months", () => {
		expect(
			differenceInMonths(new Date("2019 07 05"), new Date("2025 08 12"))
		).toBe(73);

		expect(
			differenceInMonths(new Date("2010 12 24"), new Date("2050 07 30"))
		).toBe(475);

		expect(
			differenceInMonths(new Date("1991 11 14"), new Date("1979 12 03"))
		).toBe(143);

		expect(
			differenceInMonths(new Date("1975 03 20"), new Date("1975 03 01"))
		).toBe(0);

		expect(
			differenceInMonths(new Date("1975 02 13"), new Date("1975 01 16"))
		).toBe(0);

		expect(
			differenceInMonths(new Date("2048 12 02"), new Date("2048 07 31"))
		).toBe(4);

		expect(
			differenceInMonths(new Date("2048 07 31"), new Date("2048 12 02"))
		).toBe(4);

		expect(
			differenceInMonths(new Date("2019 09 05"), new Date("2019 11 12"))
		).toBe(2);

		expect(
			differenceInMonths(new Date("2019 02 28"), new Date("2019 03 28"))
		).toBe(1);

		expect(
			differenceInMonths(new Date("2019 03 06"), new Date("2019 01 23"))
		).toBe(1);

		expect(
			differenceInMonths(new Date("2019 03 06"), new Date("2019 03 06"))
		).toBe(0);
	});

	test("should throw an error", () => {
		expect(() => {
			differenceInMonths(new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInMonths(
				new Date("2019 01 18 23:45:00"),
				new Date("19 19 2019")
			);
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInMonths("" + new Date("2019 10 09 23:12:01"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInMonths(null);
		}).toThrow(/Invalid Date/);
	});
});
