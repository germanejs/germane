const difference = require("../../../lib/utils/evaluations/difference");


describe("Should return difference between a one year range", () => {

	test("should return 2 weeks, 5 days", () => {
		expect(
			difference(new Date("2019-10-04"), new Date("2019-10-09"))
		).toStrictEqual({
			years: 0,
			months: 0,
			weeks: 0,
			days: 5,
			totalDays: 5,
			totalMonths: 0
		});
	});

	test("should return 2 weeks, 5 days", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-02-23"))
		).toStrictEqual({
			years: 0,
			months: 0,
			weeks: 2,
			days: 5,
			totalDays: 19,
			totalMonths: 0
		});
	});

	test("should return 3 weeks, 4 days", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-01-10"))
		).toStrictEqual({
			years: 0,
			months: 0,
			weeks: 3,
			days: 4,
			totalDays: -25,
			totalMonths: 0
		});
	});

	test("should return 1 month, 4 days", () => {
		expect(
			difference(new Date("2019-02-04 23:58Z"), new Date("2019-03-08"))
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 0,
			days: 4,
			totalDays: 32,
			totalMonths: 1
		});
	});

	test("should return 1 month, 4 days", () => {
		expect(
			difference(new Date("2019-03-08 11:09:11Z"), new Date("2019-02-04"))
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 0,
			days: 4,
			totalDays: -32,
			totalMonths: 1
		});
	});

	test("should return 4 months, 3 weeks, 5 days", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-06-30"))
		).toStrictEqual({
			years: 0,
			months: 4,
			weeks: 3,
			days: 5,
			totalDays: 146,
			totalMonths: 4
		});
	});
	test("should return 0 months, 0 weeks, 0 days", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-02-04"))
		).toStrictEqual({
			years: 0,
			months: 0,
			weeks: 0,
			days: 0,
			totalDays: 0,
			totalMonths: 0
		});
	});

	test("should return 9 months", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-11-04"))
		).toStrictEqual({
			years: 0,
			months: 9,
			weeks: 0,
			days: 0,
			totalDays: 273,
			totalMonths: 9
		});
	});

	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-03-04"))
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 0,
			days: 0,
			totalDays: 28,
			totalMonths: 1
		});
	});

	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-28"), new Date("2019-01-28"))
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 0,
			days: 0,
			totalDays: -31,
			totalMonths: 1
		});
	});

	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-28"), new Date("2019-01-29"))
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 0,
			days: 0,
			totalDays: -30,
			totalMonths: 1
		});
	});
	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-28"), new Date("2019-01-30"))
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 0,
			days: 0,
			totalDays: -29,
			totalMonths: 1
		});
	});

	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-28"), new Date("2019-01-31"))
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 0,
			days: 0,
			totalDays: -28,
			totalMonths: 1
		});
	});

	test("should return 1 month, 2 days", () => {
		expect(
			difference(new Date("2019-02-17"), new Date("2019-01-15"))
		).toStrictEqual({
			years: 0,
			months: 1,
			weeks: 0,
			days: 2,
			totalDays: -33,
			totalMonths: 1
		});
	});

	test("should return 1 week 5 days", () => {
		expect(
			difference(new Date("2019-02-16"), new Date("2019-02-28"))
		).toStrictEqual({
			years: 0,
			months: 0,
			weeks: 1,
			days: 5,
			totalDays: 12,
			totalMonths: 0
		});
	});

	test("should return 6 months", () => {
		expect(
			difference(new Date("2019-08-28"), new Date("2019-02-28"))
		).toStrictEqual({
			years: 0,
			months: 6,
			weeks: 0,
			days: 0,
			totalDays: -181,
			totalMonths: 6
		});
	});

	test("should return 4 months 3 days", () => {
		expect(
			difference(new Date("2019-08-28"), new Date("2019-12-31"))
		).toStrictEqual({
			years: 0,
			months: 4,
			weeks: 0,
			days: 3,
			totalDays: 125,
			totalMonths: 4
		});
	});
	test("should return 1 day", () => {
		expect(
			difference(new Date("2019-08-29"), new Date("2019-08-28"))
		).toStrictEqual({
			years: 0,
			months: 0,
			weeks: 0,
			days: 1,
			totalDays: -1,
			totalMonths: 0
		});
	});

})

describe("should return difference for dates between years whose range is greater than 1 and  in a positive range, eg (2019-02-04) - (2031-02-5)", () => {
	test('should return {years: 7, months: 6, weeks: 0, days: 4, totalMonths: 90} ', () => {
	  expect(difference(new Date("2015-02-27"), new Date("2022-08-31"))).toStrictEqual(
		  {
			  years: 7, 
			  months: 6, 
			  weeks: 0, 
			  days: 4, 
			  totalMonths: 90,
			  totalDays: 2742
			})
	})
	

	test('should return {years: 250, months: 9, weeks: 3, days: 4, totalMonths: 3009} ', () => {
		expect(difference(new Date("1771-11-06"), new Date("2022-08-31"))).toStrictEqual(
			{
				years: 250, 
				months: 9, 
				weeks: 3, 
				days: 4, 
				totalMonths: 3009,
				totalDays: 91609
			  })
	  });

	  test('should return {years: 949, months: 4, weeks: 0, days: 6, totalMonths: 11400} ', () => {
		expect(difference(new Date("1601-04-25"), new Date("2550-08-31"))).toStrictEqual(
			{
				years: 949, 
				months: 4, 
				weeks: 0, 
				days: 6, 
				totalMonths: 11392,
				totalDays: 346743
			  })
	  })
})


describe("should return difference for dates between years whose range is greater than 1 and  in a negative range, eg (2070-01-04) - (2019-02-5)", () => {
	test('should return {years: 7, months: 6, weeks: 0, days: 4, totalMonths: 90} ', () => {
	  expect(difference(new Date("2022-08-31"), new Date("2015-02-27"))).toStrictEqual(
		  {
			  years: 7, 
			  months: 6, 
			  weeks: 0, 
			  days: 4, 
			  totalMonths: 90,
			  totalDays: -2742
			})
	})
	

	test('should return {years: 36, months: 6, weeks: 2, days: 6, totalMonths: 3009} ', () => {
		expect(difference(new Date("2059-09-30"), new Date("2023-03-10"))).toStrictEqual(
			{
				years: 36, 
				months: 6, 
				weeks: 2, 
				days: 6, 
				totalMonths: 438,
				totalDays: -13353
			  })
	  });

	  test('should return {years: 27, months: 2, weeks: 2, days: 0, totalMonths: 326} ', () => {
		expect(difference(new Date("1972-12-25"), new Date("1945-10-11"))).toStrictEqual(
			{
				years: 27, 
				months: 2, 
				weeks: 2, 
				days: 0, 
				totalMonths: 326,
				totalDays: -9937
			  })
	  })
})
