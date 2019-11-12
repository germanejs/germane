const difference = require("../index");


describe("Should return difference between a one year range", () => {

	test("should return 2 week, 5 day", () => {
		expect(
			difference(new Date("2019-10-04"), new Date("2019-10-09"))
		).toStrictEqual({
			year: 0,
			month: 0,
			week: 0,
			day: 5,
			totalDay: 5,
			totalMonth: 0,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 120,
			totalMinute: 7200,
			totalSecond: 432000,
			totalMillisecond: 432000000,
			totalWeek: 0,
			millisecond: 0,
		});
	});

	test("should return 2 week, 5 day", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-02-23"))
		).toStrictEqual({
			year: 0,
			month: 0,
			week: 2,
			day: 5,
			totalDay: 19,
			totalMonth: 0,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 456,
			totalMinute: 27360,
			totalSecond: 1641600,
			totalMillisecond: 1641600000,
			totalWeek: 2,
			millisecond: 0,
		});
	});

	test("should return 3 week, 4 day", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-01-10"))
		).toStrictEqual({
			year: 0,
			month: 0,
			week: 3,
			day: 4,
			totalDay: -25,
			totalMonth: 0,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 25 * 24,
			totalMinute: 25 * 24 * 60,
			totalSecond: 25 * 24 *3600,
			totalMillisecond: -25 * 24 *3600 * 1000,
			totalWeek: 3,
			millisecond: 0,
		});
	});

	test("should return 1 month, 4 day", () => {
		expect(
			difference(new Date("2019-02-04 23:58Z"), new Date("2019-03-08"))
		).toStrictEqual({
			year: 0,
			month: 1,
			week: 0,
			day: 4,
			totalDay: 32,
			totalMonth: 1,
			hour: 0,
			minute: 2,
			second: 0,
			totalHour: 744,
			totalMinute: 44642,
			totalSecond: 2678520,
			totalMillisecond: 2678520000,
			totalWeek: 4,
			millisecond: 0,
		});
	});

	test("should return 1 month, 4 day", () => {
		expect(
			difference(new Date("2019-03-08 11:09:11Z"), new Date("2019-02-04"))
		).toStrictEqual({
			year: 0,
			month: 1,
			week: 0,
			day: 4,
			totalDay: -32,
			totalMonth: 1,
			hour: 11,
			minute: 9,
			second: 11,
			totalHour: (32 * 24 + 11),
			totalMinute: (32 * 24 + 11) * 60 + 9,
			totalSecond: ((32 * 24 + 11) * 60 + 9) * 60 + 11,
			totalMillisecond: -(((32 * 24 + 11) * 60 + 9) * 60 + 11) * 1000,
			totalWeek: 4,
			millisecond: 0,
		});
	});

	test("should return 4 month, 3 week, 5 day", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-06-30"))
		).toStrictEqual({
			year: 0,
			month: 4,
			week: 3,
			day: 5,
			totalDay: 146,
			totalMonth: 4,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 3504,
			totalMinute: 210240,
			totalSecond: 12614400,
			totalMillisecond: 12614400000,
			totalWeek: 20,
			millisecond: 0,
		});
	});
	test("should return 0 month, 0 week, 0 day", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-02-04"))
		).toStrictEqual({
			year: 0,
			month: 0,
			week: 0,
			day: 0,
			totalDay: 0,
			totalMonth: 0,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 0,
			totalMinute: 0,
			totalSecond: 0,
			totalMillisecond: 0,
			totalWeek: 0,
			millisecond: 0,
		});
	});

	test("should return 9 month", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-11-04"))
		).toStrictEqual({
			year: 0,
			month: 9,
			week: 0,
			day: 0,
			totalDay: 273,
			totalMonth: 9,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 6552,
			totalMinute: 393120,
			totalSecond: 393120 * 60,
			totalMillisecond: 393120 * 60 * 1000,
			totalWeek: 39,
			millisecond: 0,
		});
	});

	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-04"), new Date("2019-03-04"))
		).toStrictEqual({
			year: 0,
			month: 1,
			week: 0,
			day: 0,
			totalDay: 28,
			totalMonth: 1,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 28 * 24,
			totalMinute: 28 * 24 * 60,
			totalSecond: 28 * 24 *3600,
			totalMillisecond: 28 * 24 *3600 * 1000,
			totalWeek: 4,
			millisecond: 0,
		});
	});

	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-28"), new Date("2019-01-28"))
		).toStrictEqual({
			year: 0,
			month: 1,
			week: 0,
			day: 0,
			totalDay: -31,
			totalMonth: 1,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 31 * 24,
			totalMinute: 31 * 24 * 60,
			totalSecond: 31 * 24 *3600,
			totalMillisecond: -31 * 24 *3600 * 1000,
			totalWeek: 4,
			millisecond: 0,
		});
	});

	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-28"), new Date("2019-01-29"))
		).toStrictEqual({
			year: 0,
			month: 1,
			week: 0,
			day: 0,
			totalDay: -30,
			totalMonth: 1,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 30 * 24,
			totalMinute: 30 * 24 * 60,
			totalSecond: 30 * 24 *3600,
			totalMillisecond: -30 * 24 *3600 * 1000,
			totalWeek: 4,
			millisecond: 0,
		});
	});
	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-28"), new Date("2019-01-30"))
		).toStrictEqual({
			year: 0,
			month: 1,
			week: 0,
			day: 0,
			totalDay: -29,
			totalMonth: 1,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 29 * 24,
			totalMinute: 29 * 24 * 60,
			totalSecond: 29 * 24 *3600,
			totalMillisecond: -29 * 24 *3600 * 1000,
			totalWeek: 4,
			millisecond: 0,
		});
	});

	test("should return 1 month", () => {
		expect(
			difference(new Date("2019-02-28"), new Date("2019-01-31"))
		).toStrictEqual({
			year: 0,
			month: 1,
			week: 0,
			day: 0,
			totalDay: -28,
			totalMonth: 1,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 28 * 24,
			totalMinute: 28 * 24 * 60,
			totalSecond: 28 * 24 *3600,
			totalMillisecond: -28 * 24 *3600 * 1000,
			totalWeek: 4,
			millisecond: 0,
		});
	});

	test("should return 1 month, 2 day", () => {
		expect(
			difference(new Date("2019-02-17"), new Date("2019-01-15"))
		).toStrictEqual({
			year: 0,
			month: 1,
			week: 0,
			day: 2,
			totalDay: -33,
			totalMonth: 1,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 33 * 24,
			totalMinute: 33 * 24 * 60,
			totalSecond: 33 * 24 *3600,
			totalMillisecond: -33 * 24 *3600 * 1000,
			totalWeek: 4,
			millisecond: 0,
		});
	});

	test("should return 1 week 5 day", () => {
		expect(
			difference(new Date("2019-02-16"), new Date("2019-02-28"))
		).toStrictEqual({
			year: 0,
			month: 0,
			week: 1,
			day: 5,
			totalDay: 12,
			totalMonth: 0,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 12 * 24,
			totalMinute: 12 * 24 * 60,
			totalSecond: 12 * 24 *3600,
			totalMillisecond: 12 * 24 *3600 * 1000,
			totalWeek: 1,
			millisecond: 0,
		});
	});

	test("should return 6 month", () => {
		expect(
			difference(new Date("2019-08-28"), new Date("2019-02-28"))
		).toStrictEqual({
			year: 0,
			month: 6,
			week: 0,
			day: 0,
			totalDay: -181,
			totalMonth: 6,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 181 * 24,
			totalMinute: 181 * 24 * 60,
			totalSecond: 181 * 24 *3600,
			totalMillisecond: -181 * 24 *3600 * 1000,
			totalWeek: 25,
			millisecond: 0,
		});
	});

	test("should return 4 month 3 day", () => {
		expect(
			difference(new Date("2019-08-28"), new Date("2019-12-31"))
		).toStrictEqual({
			year: 0,
			month: 4,
			week: 0,
			day: 3,
			totalDay: 125,
			totalMonth: 4,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 125 * 24,
			totalMinute: 125 * 24 * 60,
			totalSecond: 125 * 24 *3600,
			totalMillisecond: 125 * 24 *3600 * 1000,
			totalWeek: 17,
			millisecond: 0,
		});
	});
	test("should return 1 day", () => {
		expect(
			difference(new Date("2019-08-29"), new Date("2019-08-28"))
		).toStrictEqual({
			year: 0,
			month: 0,
			week: 0,
			day: 1,
			totalDay: -1,
			totalMonth: 0,
			hour: 0,
			minute: 0,
			second: 0,
			totalHour: 1 * 24,
			totalMinute: 1 * 24 * 60,
			totalSecond: 1 * 24 *3600,
			totalMillisecond: -1 * 24 *3600 * 1000,
			totalWeek: 0,
			millisecond: 0,
		});
	});

})

describe("should return difference for dates between year whose range is greater than 1 and  in a positive range, eg (2019-02-04) - (2031-02-5)", () => {
	test('should return {year: 7, month: 6, week: 0, day: 4, totalMonth: 90} ', () => {
	  expect(difference(new Date("2015-02-27"), new Date("2022-08-31"))).toStrictEqual(
		  {
			  year: 7, 
			  month: 6, 
			  week: 0, 
			  day: 4, 
			  totalMonth: 90,
			  totalDay: 2742,
			  hour: 0,
			  minute: 0,
			  second: 0,
			  totalHour: 2742 * 24,
			  totalMinute: 2742 * 24 * 60,
			  totalSecond: 2742 * 24 *3600,
			  totalMillisecond: 2742 * 24 *3600 * 1000,
			  totalWeek: 391,
			  millisecond: 0,
			})
	})
	

	test('should return {year: 250, month: 9, week: 3, day: 4, totalMonth: 3009} ', () => {
		expect(difference(new Date("1771-11-06"), new Date("2022-08-31"))).toStrictEqual(
			{
				year: 250, 
				month: 9, 
				week: 3, 
				day: 4, 
				totalMonth: 3009,
				totalDay: 91609,
				hour: 0,
				minute: 0,
				second: 0,
				totalHour: 91609 * 24,
				totalMinute: 91609 * 24 * 60,
				totalSecond: 91609 * 24 *3600,
				totalMillisecond: 91609 * 24 *3600 * 1000,
				totalWeek: 13087,
				millisecond: 0,
			  })
	  });

	  test('should return {year: 949, month: 4, week: 0, day: 6, totalMonth: 11400} ', () => {
		expect(difference(new Date("1601-04-25"), new Date("2550-08-31"))).toStrictEqual(
			{
				year: 949, 
				month: 4, 
				week: 0, 
				day: 6, 
				totalMonth: 11392,
				totalDay: 346743,
				hour: 0,
				minute: 0,
				second: 0,
				totalHour: 346743 * 24,
				totalMinute: 346743 * 24 * 60,
				totalSecond: 346743 * 24 *3600,
				totalMillisecond: 346743 * 24 *3600 * 1000,
				totalWeek: 49534,
				millisecond: 0,
			  })
	  })
})


describe("should return difference for dates between year whose range is greater than 1 and  in a negative range, eg (2070-01-04) - (2019-02-5)", () => {
	test('should return {year: 7, month: 6, week: 0, day: 4, totalMonth: 90} ', () => {
	  expect(difference(new Date("2022-08-31"), new Date("2015-02-27"))).toStrictEqual(
		  {
			  year: 7, 
			  month: 6, 
			  week: 0, 
			  day: 4, 
			  totalMonth: 90,
			  totalDay: -2742,
			  hour: 0,
			  minute: 0,
			  second: 0,
			  totalHour: 2742 * 24,
			  totalMinute: 2742 * 24 * 60,
			  totalSecond: 2742 * 24 *3600,
			  totalMillisecond: -2742 * 24 *3600 * 1000,
			  totalWeek: 391,
			  millisecond: 0,
			})
	})
	

	test('should return {year: 36, month: 6, week: 2, day: 6, totalMonth: 3009} ', () => {
		expect(difference(new Date("2059-09-30"), new Date("2023-03-10"))).toStrictEqual(
			{
				year: 36, 
				month: 6, 
				week: 2, 
				day: 6, 
				totalMonth: 438,
				totalDay: -13353,
				hour: 0,
				minute: 0,
				second: 0,
				totalHour: 13353 * 24,
				totalMinute: 13353 * 24 * 60,
				totalSecond: 13353 * 24 *3600,
				totalMillisecond: -13353 * 24 *3600 * 1000,
				totalWeek: 1907,
				millisecond: 0,
			  })
	  });

	  test('should return {year: 27, month: 2, week: 2, day: 0, totalMonth: 326} ', () => {
		expect(difference(new Date("1972-12-25"), new Date("1945-10-11"))).toStrictEqual(
			{
				year: 27, 
				month: 2, 
				week: 2, 
				day: 0, 
				totalMonth: 326,
				totalDay: -9937,
				hour: 0,
				minute: 0,
				second: 0,
				millisecond: 0,
				totalHour: 9937 * 24,
				totalMinute: 9937 * 24 * 60,
				totalSecond: 9937 * 24 *3600,
				totalMillisecond: -9937 * 24 *3600 * 1000,
				totalWeek: 1419,
			  })
	  })
})
