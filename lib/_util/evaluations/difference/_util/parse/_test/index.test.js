const {
	fromNegativeYear,
	fromPositiveYear
} = require("../index");

describe("Handles positive dates difference ", () => {
	test("should return an object of {year: 10, month: 11, week: 0, day: 0, totalMonth: 131}", () => {
		const from = new Date("2019-09-09"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(), fromYear = from.getUTCFullYear();
		const to = new Date("2030-09-09"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(),
			toYear = to.getUTCFullYear();

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
			year: 11,
			month: 0,
			week: 0,
			day: 0,
			totalMonth: 132
		});
	});

	test("should return an object of {year: 10, month: 11, week: 0, day: 0, totalMonth: 131}", () => {
		const from = new Date("1980-02-27"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(), fromYear = from.getUTCFullYear();
		const to = new Date("2015-01-19"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(),
			toYear = to.getUTCFullYear();
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
			year: 34,
			month: 10,
			week: 3,
			day: 2,
			totalMonth: 418
		});
	});
});

describe("Handles negative dates difference ", () => {
	test("should return an object of {year: 10, month: 11, week: 0, day: 0, totalMonth: 131}", () => {
		const to = new Date("2019-09-09"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(), toYear = to.getUTCFullYear();
		const from = new Date("2030-09-09"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(),
			fromYear = from.getUTCFullYear();
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
			year: 11,
			month: 0,
			week: 0,
			day: 0,
			totalMonth: 132
		});
	});

	test("should return an object of {year: 10, month: 11, week: 0, day: 0, totalMonth: 131}", () => {
		const to = new Date("1980-02-27"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(), toYear = to.getUTCFullYear();
		const from = new Date("2015-01-19"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(),
			fromYear = from.getUTCFullYear();
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
			year: 34,
			month: 10,
			week: 3,
			day: 2,
			totalMonth: 418
		});
	});

	test("should return an object of {year: 1, month: 1, week: 0, day: 0, totalMonth: 12}", () => {
		const from = new Date("2019-02-28"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(),
			fromYear = from.getUTCFullYear();
		const to = new Date("2018-01-28"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(),
			toYear = to.getUTCFullYear();
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
			year: 1,
			month: 1,
			week: 0,
			day: 0,
			totalMonth: 13
		});
	});
});

describe("Handles dates difference within a year range", () => {
	test("should return an object of {year: 0, month: 7, week: 1, day: 4, totalMonth: 7}", () => {
		const to = new Date("2019-09-09"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(),
			toYear = to.getUTCFullYear();
		const from = new Date("2019-01-29"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(),
			fromYear = from.getUTCFullYear();
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
			year: 0,
			month: 7,
			week: 1,
			day: 4,
			totalMonth: 7
		});
	});

	test("should return an object of {year: 0, month: 1, week: 1, day: 1, totalMonth: 1}", () => {
		const from = new Date("2015-02-27"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(),
			fromYear = from.getUTCFullYear();
		const to = new Date("2015-01-19"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(),
			toYear = to.getUTCFullYear();
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
			year: 0,
			month: 1,
			week: 1,
			day: 1,
			totalMonth: 1
		});
	});

	test("should return an object of {year: 0, month: 1, week: 0, day: 0, totalMonth: 1}", () => {
		const from = new Date("2019-02-28"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(),
			fromYear = from.getUTCFullYear();
		const to = new Date("2019-01-28"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(),
			toYear = to.getUTCFullYear();
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
			year: 0,
			month: 1,
			week: 0,
			day: 0,
			totalMonth: 1
		});
	});

	test("should return an object of {year: 0, month: 4, week: 3, day: 1, totalMonth: 4}", () => {
		const from = new Date("2020-01-31"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(),
			fromYear = from.getUTCFullYear();
		const to = new Date("2020-06-22"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(),
			toYear = to.getUTCFullYear();
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
			year: 0,
			month: 4,
			week: 3,
			day: 1,
			totalMonth: 4
		});
	});

	test("should return an object of {year: 0, month: 4, week: 0, day: 2, totalMonth: 4}", () => {
		const from = new Date("2020-07-31"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(),
			fromYear = from.getUTCFullYear();
		const to = new Date("2020-12-02"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(),
			toYear = to.getUTCFullYear();
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
			year: 0,
			month: 4,
			week: 0,
			day: 2,
			totalMonth: 4
		});
	});

	test("should return an object of {year: 0, month: 1, week: 4, day: 2, totalMonth: 1}", () => {
		const from = new Date("2020-07-22"),
			fromMonth = from.getUTCMonth() + 1,
			fromDate = from.getUTCDate(),
			fromYear = from.getUTCFullYear();
		const to = new Date("2020-09-21"),
			toMonth = to.getUTCMonth() + 1,
			toDate = to.getUTCDate(),
			toYear = to.getUTCFullYear();
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
			year: 0,
			month: 1,
			week: 4,
			day: 2,
			totalMonth: 1
		});
	});
});



