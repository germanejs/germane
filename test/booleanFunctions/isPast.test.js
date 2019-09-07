const isPast = require("../../lib/isPast");

describe("isPast, checks whether its seconds parameter is the passed date of the first", () => {
	test("should return true", () => {
		expect(isPast(new Date("2019 12 08"), new Date("2018 11 04"))).toBe(
			true
		);
		expect(
			isPast(new Date("2019-05-12T12:09:18.670Z"), new Date("2019 01 23"))
		).toBe(true);
		expect(
			isPast(
				new Date(1200, 1, 12, 14, 13, 4, 200),
				new Date(1200, 1, 12, 14, 13, 4, 100)
			)
		).toBe(true);
		expect(
			isPast(new Date("2000/01/01"), new Date("1999 12 31 23:56:00"))
		).toBe(true);
		expect(
			isPast(
				new Date("2040 02 27 13:23:12"),
				new Date("2040 02 27 12:00:00")
			)
		).toBe(true);
	});

	test("should return false", () => {
		expect(isPast(new Date("1000 10 10"), new Date("1000 10 10"))).toBe(
			false
		);
		expect(
			isPast(
				new Date("2019-09-02T12:09:18.670Z"),
				new Date(2021, 5, 13, 21, 0, 1, 450)
			)
		).toBe(false);
		expect(
			isPast(
				new Date(1200, 13, 23, 14, 13, 4, 200),
				new Date("2019 07 04")
			)
		).toBe(false);
		expect(isPast(new Date("2000/01/01"), new Date("2019 12 09"))).toBe(
			false
		);
	});

	test("should throw an invalid date error", () => {
		expect(() => {
			isPast(null);
		}).toThrow(/Invalid Date/);
		expect(() => {
			isPast(undefined);
		}).toThrow(/Invalid Date/);
		expect(() => {
			isPast(new Date("19, 19, 19"), new Date(2100, 4, 6));
		}).toThrow(/Invalid Date/);
	});
});
