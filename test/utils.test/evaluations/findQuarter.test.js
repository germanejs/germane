const { findQuarter } = require("../../../lib/utils/evaluations/findQuarter");

describe("Returns the quarter of a given date", () => {
	test("should return {quarter: 4, quarterEnd: 366", () => {
		expect(findQuarter(336, 2020)).toStrictEqual({
			quarter: 4,
			quarterEnd: 366
		});
	});

	test("should return {quarter: 3, quarterEnd: 273", () => {
		expect(findQuarter(243, 2019)).toStrictEqual({
			quarter: 3,
			quarterEnd: 273
		});
	});

	test("should return {quarter: 2, quarterEnd: 181", () => {
		expect(findQuarter(100, 2019)).toStrictEqual({
			quarter: 2,
			quarterEnd: 181
		});
	});

	test("should return {quarter: 2, quarterEnd: 182", () => {
		expect(findQuarter(100, 2020)).toStrictEqual({
			quarter: 2,
			quarterEnd: 182
		});
	});

	test("should return {quarter: 1, quarterEnd: 91", () => {
		expect(findQuarter(1, 2020)).toStrictEqual({
			quarter: 1,
			quarterEnd: 91
		});
	});
});
