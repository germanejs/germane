const differenceInDays = require("../../lib/differenceInDays");

describe("differenceInDays returns the distance or difference between two dates in days", () => {
	test("should return the number of days between dates specified in test", () => {
		expect(differenceInDays(new Date(), new Date())).toBe(0);

		// should default to "absFloor" as rounding method.
		expect(
			differenceInDays(
				new Date("2010 11 19 23:11:02"),
				new Date("2019 01 23 02:17:09"),
				{ includeTime: true }
			)
		).toBe(2986);

		expect(
			differenceInDays(
				new Date("2010 11 19 23:11:02"),
				new Date("2019 01 23 02:17:09"),
				{ includeTime: true, roundingMethod: "max" }
			)
		).toBe(2986);

		expect(
			differenceInDays(
				new Date("2010 11 19 18:34:52"),
				new Date("2000 01 23 12:11:09"),
				{ includeTime: true, roundingMethod: "absCeil" }
			)
		).toBe(3954);

		expect(
			differenceInDays(
				new Date("2010 11 19 18:34:52"),
				new Date("2000 01 23 12:11:09"),
				{ includeTime: true, roundingMethod: "floor" }
			)
		).toBe(-3954);

		expect(
			differenceInDays(
				new Date("2019 12 31 18:34:52"),
				new Date("1970 01 01 12:11:09"),
				{ includeTime: true, roundingMethod: "trunc" }
			)
		).toBe(-18261);

		expect(
			differenceInDays(
				new Date("2019 12 31 18:34:52"),
				new Date("1970 01 01 12:11:09"),
				{ includeTime: true, roundingMethod: "ceil" }
			)
		).toBe(-18261);

		expect(
			differenceInDays(
				new Date("2019 12 31 18:34:52"),
				new Date("1970 01 01 12:11:09"),
				{ includeTime: true, roundingMethod: "absFloor" }
			)
		).toBe(18261);
	});

	test("should throw errors", () => {
		expect(() => {
			differenceInDays(new Date("2018 01 11"), new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInDays(new Date(), new Date(), {
				includeTime: false,
				roundingMethod: null
			});
		}).toThrow(
			/Expects property roundingMethod to be a one of these: 'absFloor | absCeil | floor | trunc | ceil'/
		);
		expect(() => {
			differenceInDays("", new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInDays(
				new Date("2018 01 11"),
				new Date("2019 23 10 23:90:09")
			);
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInDays(null);
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInDays(new Date(), new Date(), null);
		}).toThrow(
			/Invalid option... Expects an object with a property includeTime/
		);

		expect(() => {
			differenceInDays(new Date(), new Date(), { includeTime: 9 });
		}).toThrow(/Expects property includeTime to be a boolean value/);
	});
});
