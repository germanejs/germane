const differenceInYears = require("../../lib/differenceInYears");

describe("differenceInYears returns the difference between two dates in human readable form", () => {
	test("should return the difference in words", () => {
		expect(
			differenceInYears(new Date("2019 07 05"), new Date("2025 08 12"))
		).toBe(6);

		expect(
			differenceInYears(new Date("2010 12 24"), new Date("2050 07 30"))
		).toBe(39);

		expect(
			differenceInYears(new Date("1991 11 14"), new Date("1979 12 03"))
		).toBe(11);

		expect(
			differenceInYears(new Date("1975 03 20"), new Date("2000 03 01"))
		).toBe(24);

		expect(
			differenceInYears(new Date("1920 10 19"), new Date("2025 08 12"))
		).toBe(104);

		expect(
			differenceInYears(new Date("2048 07 15"), new Date("2018 07 31"))
		).toBe(29);

		expect(
			differenceInYears(new Date("2019 12 02"), new Date("1601 07 31"))
		).toBe(418);

		expect(
			differenceInYears(new Date("1900 07 31"), new Date("1905 07 15"))
		).toBe(4);

		expect(
			differenceInYears(new Date("1775 02 28"), new Date("1890 09 02"))
		).toBe(115);

		expect(
			differenceInYears(new Date("2019 09 5"), new Date("2011 10 02"))
		).toBe(7);

		expect(
			differenceInYears(new Date("1000 01 01"), new Date("2000 12 31"))
		).toBe(1000);

		expect(
			differenceInYears(new Date("2019 03 06"), new Date("2019 03 06"))
		).toBe(0);
	});

	test("should throw an error", () => {
		expect(() => {
			differenceInYears(new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInYears(
				new Date("2019 01 18 23:45:00"),
				new Date("19 19 2019")
			);
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInYears("" + new Date("2019 10 09 23:12:01"));
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInYears(null);
		}).toThrow(/Invalid Date/);
	});
});
