const differenceUsingTime = require("../../../lib/utils/evaluations/differenceUsingTime");

describe("returns a timestamp of the difference between two dates including a option to include time, also throws errors", () => {
	test("should throw an error (invalid date)", () => {
		expect(() => {
			differenceUsingTime(new Date(), new Date("19 09 19"));
		}).toThrow(/Invalid Date/);
		expect(() => {
			differenceUsingTime(
				new Date().toString(),
				new Date("2019 09 19").toDateString()
			);
		}).toThrow(/Invalid Date/);

		expect(() => {
			differenceUsingTime(new Date(), new Date("2019 09 19"), null);
		}).toThrow(
			/Invalid option... Expects an object with a property includeTime/
		);

		expect(() => {
			differenceUsingTime(new Date(), new Date("2019 09 19"), {
				includeTime: undefined
			});
		}).toThrow(/Expects property includeTime to be a boolean value/);
	});

	test("should return a timestamp", () => {
		expect(
			differenceUsingTime(
				new Date("2019 08 29 14:50:12"),
				new Date("2019 09 19 09:23:56"),
				{
					includeTime: true
				}
			)
		).toBe(1794824000);

		expect(
			differenceUsingTime(
				new Date("2019 09 19 09:23:56"),
				new Date("2019 08 29 14:50:12"),
				{
					includeTime: true
				}
			)
		).toBe(-1794824000);

		expect(
			differenceUsingTime(
				new Date("2019 09 19 09:23:56"),
				new Date("2019 08 29 14:50:12"),
				{
					includeTime: false
				}
			)
		).toBe(-1814400000);

		expect(
			differenceUsingTime(
				new Date("2019 09 19 09:23:56"),
				new Date("2019 08 29 14:50:12")
			)
		).toBe(-1814400000);
	});
});
