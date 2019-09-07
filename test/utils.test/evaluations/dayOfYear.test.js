const dayInYear = require("../../../lib/utils/evaluations/dayOfYear");

describe("Returns the  ordinal day in a given date", () => {
	test("should the day day in year", () => {
		const d = new Date("2019 12 31");
		expect(dayInYear(d.getFullYear(), d.getMonth() + 1, d.getDate())).toBe(
			365
		);
		// dayInYear parameters defaults to the unix epoch.
		expect(dayInYear()).toBe(1);
	});
});
