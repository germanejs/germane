const {
	fromNegativeYear,
	fromPositiveYear
} = require("../../../lib/utils/evaluations/date_difference_evaluation");

describe("Handles positive dates difference ", () => {
	test("should return an object of {years: 10, months: 11, weeks: 0, days: 0, totalMonths: 131}", () => {
		const from = new Date("2019-09-09"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(), fromYear = from.getFullYear();
		const to = new Date("2030-09-09"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(),
			toYear = to.getFullYear();

		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromPositiveYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 11,
			months: 0,
			weeks: 0,
			days: 0,
			totalMonths: 132
		});
	});

	test("should return an object of {years: 10, months: 11, weeks: 0, days: 0, totalMonths: 131}", () => {
		const from = new Date("1980-02-27"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(), fromYear = from.getFullYear();
		const to = new Date("2015-01-19"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(),
			toYear = to.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromPositiveYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 34,
			months: 10,
			weeks: 3,
			days: 2,
			totalMonths: 418
		});
	});
});

describe("Handles negative dates difference ", () => {
	test("should return an object of {years: 10, months: 11, weeks: 0, days: 0, totalMonths: 131}", () => {
		const to = new Date("2019-09-09"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(), toYear = to.getFullYear();
		const from = new Date("2030-09-09"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(),
			fromYear = from.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromNegativeYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 11,
			months: 0,
			weeks: 0,
			days: 0,
			totalMonths: 132
		});
	});

	test("should return an object of {years: 10, months: 11, weeks: 0, days: 0, totalMonths: 131}", () => {
		const to = new Date("1980-02-27"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(), toYear = to.getFullYear();
		const from = new Date("2015-01-19"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(),
			fromYear = from.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromNegativeYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 34,
			months: 10,
			weeks: 3,
			days: 2,
			totalMonths: 418
		});
	});

	test("should return an object of {years: 1, months: 1, weeks: 0, days: 0, totalMonths: 12}", () => {
		const from = new Date("2019-02-28"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(),
			fromYear = from.getFullYear();
		const to = new Date("2018-01-28"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(),
			toYear = to.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromNegativeYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 1,
			months: 1,
			weeks: 0,
			days: 0,
			totalMonths: 13
		});
	});
});

describe("Handles dates difference within a year range", () => {
	test("should return an object of {years: 0, months: 7, weeks: 1, days: 4, totalMonths: 7}", () => {
		const to = new Date("2019-09-09"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(),
			toYear = to.getFullYear();
		const from = new Date("2019-01-29"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(),
			fromYear = from.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromPositiveYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 0,
			months: 7,
			weeks: 1,
			days: 4,
			totalMonths: 7
		});
	});

	test("should return an object of {years: 0, months: 1, weeks: 1, days: 1, totalMonths: 1}", () => {
		const from = new Date("2015-02-27"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(),
			fromYear = from.getFullYear();
		const to = new Date("2015-01-19"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(),
			toYear = to.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromNegativeYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 1,
			days: 1,
			totalMonths: 1
		});
	});

	test("should return an object of {years: 0, months: 1, weeks: 0, days: 0, totalMonths: 1}", () => {
		const from = new Date("2019-02-28"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(),
			fromYear = from.getFullYear();
		const to = new Date("2019-01-28"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(),
			toYear = to.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromNegativeYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 0,
			days: 0,
			totalMonths: 1
		});
	});

	test("should return an object of {years: 0, months: 4, weeks: 3, days: 1, totalMonths: 4}", () => {
		const from = new Date("2020-01-31"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(),
			fromYear = from.getFullYear();
		const to = new Date("2020-06-22"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(),
			toYear = to.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromPositiveYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 0,
			months: 4,
			weeks: 3,
			days: 1,
			totalMonths: 4
		});
	});

	test("should return an object of {years: 0, months: 4, weeks: 0, days: 2, totalMonths: 4}", () => {
		const from = new Date("2020-07-31"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(),
			fromYear = from.getFullYear();
		const to = new Date("2020-12-02"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(),
			toYear = to.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromPositiveYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 0,
			months: 4,
			weeks: 0,
			days: 2,
			totalMonths: 4
		});
	});

	test("should return an object of {years: 0, months: 1, weeks: 4, days: 2, totalMonths: 1}", () => {
		const from = new Date("2020-07-22"),
			fromMonth = from.getMonth() + 1,
			fromDate = from.getDate(),
			fromYear = from.getFullYear();
		const to = new Date("2020-09-21"),
			toMonth = to.getMonth() + 1,
			toDate = to.getDate(),
			toYear = to.getFullYear();
		const totalDays = (to - from) / (24 * 1000 * 3600);
		expect(
			fromPositiveYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			)
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 4,
			days: 2,
			totalMonths: 1
		});
	});
});



