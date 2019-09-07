const getBusinessDays = require(".././lib/getBusinessDays");

describe("getBussinessDays, returns array of business days (mon-fri) ranging from first date to second date", () => {
	test("should return an array of  timestamp", () => {
		const timestamps = [
			1567638000000,
			1567724400000,
			1567983600000,
			1568070000000,
			1568156400000,
			1568242800000,
			1568329200000,
			1568588400000,
			1568674800000,
			1568761200000,
			1568847600000,
			1568934000000
		];
		expect(
			getBusinessDays(
				new Date("2019 09 05"),
				new Date("2019 09 21"),
				function(a) {
					return a;
				}
			)
		).toStrictEqual(timestamps);
	});

	test("should return an array of timestamp", () => {
		const timestamps = [
			1568934000000,
			1568847600000,
			1568761200000,
			1568674800000,
			1568588400000,
			1568329200000,
			1568242800000,
			1568156400000,
			1568070000000,
			1567983600000,
			1567724400000,
			1567638000000
		];
		expect(
			getBusinessDays(
				new Date("2019 09 21"),
				new Date("2019 09 05"),
				a => a
			)
		).toStrictEqual(timestamps);
	});

	test("should throw an error", () => {
		expect(() => {
			getBusinessDays(Date.now(), null);
		}).toThrow(/Invalid Date/);

		expect(() => {
			getBusinessDays(new Date("2019 09 05"), "");
		}).toThrow(/Invalid Date/);

		expect(() => {
			getBusinessDays({}, Date.now());
		}).toThrow(/Invalid Date/);

		expect(() => {
			getBusinessDays(new Date().toISOString(), Date.now());
		}).toThrow(/Invalid Date/);
	});
});
