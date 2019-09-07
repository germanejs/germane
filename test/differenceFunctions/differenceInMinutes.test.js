const differenceInMinutes = require("../../lib/differenceInMinutes");

describe("differenceInMinutes returns the distance between two dates in minutes", () => {
	test("should return the distance in minutes", () => {
		expect(
			differenceInMinutes(new Date(), new Date(), {
				includeTime: true
			})
		).toBe(0);

		expect(
			differenceInMinutes(new Date(), new Date(), {
				includeTime: true,
				roundingMethod: "abstrunc"
			})
		).toBe(0);

		expect(
			differenceInMinutes(
				new Date("2010 11 19 23:11:02"),
				new Date("2019 01 23 02:17:09"),
				{ includeTime: true }
			)
		).toBe(4300026);

		expect(
			differenceInMinutes(
				new Date("2010 11 19 18:34:52"),
				new Date("2000 01 23 12:11:09"),
				{ includeTime: true, roundingMethod: "ceil" }
			)
		).toBe(-5692703);

		expect(
			differenceInMinutes(
				new Date("2010 11 19 18:34:52"),
				new Date("2000 01 23 12:11:09"),
				{ includeTime: false, roundingMethod: "absCeil" }
			)
		).toBe(5692320);

		expect(
			differenceInMinutes(
				new Date("2019 12 31 18:34:52"),
				new Date("1970 01 01 12:11:09"),
				{ includeTime: true, roundingMethod: "floor" }
			)
		).toBe(-26296224);
		expect(
			differenceInMinutes(
				new Date("2019 12 31 18:34:52"),
				new Date("1970 01 01 12:11:09"),
				{ includeTime: true, roundingMethod: "trunc" }
			)
		).toBe(-26296223);
	});

	test("should throw errors", () => {
		expect(() => {
			differenceInMinutes(new Date("2018 01 11"), new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInMinutes("", new Date(""));
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInMinutes(
				new Date("2018 01 11"),
				new Date("2019 23 10 23:90:09")
			);
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInMinutes(null);
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceInMinutes(new Date(), new Date(), null);
		}).toThrow(
			/Invalid option... Expects an object with a property includeTime/
		);

		expect(() => {
			differenceInMinutes(new Date(), new Date(), { includeTime: 9 });
		}).toThrow(/Expects property includeTime to be a boolean value/);

		expect(() => {
			differenceInMinutes(new Date(), new Date(), {
				includeTime: false,
				roundingMethod: null
			});
		}).toThrow(
			/Expects property roundingMethod to be a one of these: 'absFloor | absCeil | floor | trunc | ceil'/
		);
	});
});
