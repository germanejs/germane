const useCFormat = require("./useCFormat"),
	format = require("./format"),
	isBusinessDay = require("./isBusinessDay"),
	getBusinessDays = require("./getBusinessDays"),
	isWeekend = require("./isWeekend"),
	isToday = require("./isToday"),
	isSameDay = require("./isSameDay"),
	isNextDay = require("./isNextDay"),
	isYesterday = require("./isYesterday"),
	isLastWeek = require("./isLastWeek"),
	isSameWeek = require("./isSameWeek"),
	difference = require("./utils/evaluations/difference"),
	endOfWeek = require("./endOfWeek"),
	endOfHour = require("./endOfHour"),
	endOfDay = require("./endOfDay"),
	endOfMinute = require("./endOfMinute"),
	endOfQuarter = require("./endOfQuarter"),
	endOfMonth = require("./endOfMonth"),
	startOfDay = require("./startOfDay"),
	startOfHour = require("./startOfHour"),
	startOfMinute = require("./startOfMinute"),
	startOfWeek = require("./startOfWeek"),
	startOfMonth = require("./startOfMonth"),
	startOfQuarter = require("./startOfQuarter"),
	startOfYear = require("./startOfYear"),
	differenceInWords = require("./differenceInWords"),
	differenceInHours = require("./differenceInHours"),
	differenceInMilliseconds = require("./differenceInMilliseconds"),
	differenceInMinutes = require("./differenceInMinutes"),
	differenceInSeconds = require("./differenceInSeconds"),
	differenceInWeeks = require("./differenceInWeeks"),
	differenceInDays = require("./differenceInDays"),
	differenceInMonths = require("./differenceInMonths"),
	differenceInYears = require("./differenceInYears"),
	differenceInBusinessDays = require("./differenceInBusinessDays"),
	isPast = require("./isPast"),
	isFuture = require("./isFuture"),
	isDate = require("./isDate"),
	isValid = require("./isValid");

console.log(useCFormat(Date.now(), "%A, %B %d, %Y  %I:%M:%S %p"));
console.log(format(Date.now(), "Today is dddd, Do of MMMM YYYY, HH:ss:ss"));

// const gwd = getBusinessDays(new Date("2019 09 19"), Date.now(), a =>
// 	format(a, "MMMM Do YYYY")
// );

// console.log(gwd);
// console.log(isBusinessDay(new Date("2019 09 02 17:07:23")));
// console.log(isWeekend(new Date("2019 08 18 17:07:23")));
// console.log(isToday(Date.now()));
// console.log(isSameDay(Date.now(), new Date("2019 08 28")));
// console.log(isNextDay(new Date("2019 01 22"), new Date("2019 01 23")));
// console.log(isYesterday(new Date("2019 01 22"), new Date("2019 01 21")));
// console.log(isLastWeek(new Date("2019 01 01"), new Date("2018 01 01")));
// console.log(isSameWeek(new Date("2019 12 31"), new Date("2020 01 04")));
// console.log(difference(new Date("2019 02 04"), new Date("2019 01 10")));

// console.log(endOfWeek(Date.now()));
// console.log(endOfHour(Date.now()));
// console.log(endOfDay(Date.now()));
// console.log(endOfMinute(Date.now()));
// console.log(endOfQuarter(new Date("1990 12 31 14:56:11")));
// console.log(endOfMonth(new Date("2019 08 10")));
// console.log(endOfToday());
// console.log(startOfDay(Date.now()));
// console.log(startOfHour(Date.now()));
// console.log(startOfMinute(Date.now()));
// console.log(startOfWeek(new Date("2019 09 28 17:09:12")));
// console.log(startOfMonth(new Date("2019 08 10")));
// console.log(startOfQuarter(new Date("2011 01 21 01:00:15")));
// console.log(startOfYear(Date.now()));

// console.log(differenceInHours(Date.now(), Date.now(), { includeTime: true }));
// console.log(
// 	differenceInMilliseconds(
// 		new Date(2011, 6, 3, 23, 17, 56),
// 		new Date(2011, 6, 2, 23, 59, 19),
// 		{ includeTime: true, roundindMethod: "ceil" }
// 	)
// );
// console.log(
// 	differenceInMinutes(
// 		new Date(2020, 6, 3, 0, 1, 59),
// 		new Date(2011, 6, 2, 23, 59, 23),
// 		{ includeTime: true, roundingMethod: "absFloor" }
// 	)
// );
// console.log(
// 	differenceInSeconds(
// 		new Date(2011, 6, 3, 0, 1, 59),
// 		new Date(2011, 6, 2, 23, 59, 23),
// 		{ includeTime: true, roundingMethod: "ceil" }
// 	)
// );

// console.log(
// 	differenceInWeeks(
// 		new Date("2013 6 3 23:59:59"),
// 		new Date("2011 7 2 23:59:59"),
// 		{ includeTime: false, roundingMethod: "ceil" }
// 	)
// );

// console.log(
// 	differenceInDays(
// 		new Date("2020 11 19 23:51:02"),
// 		new Date("2019 01 23 23:59:09"),
// 		{
// 			includeTime: true,
// 			roundingMethod: "absFloor"
// 		}
// 	)
// );

// console.log(
// 	differenceInMonths(new Date("2005 06 23 10:00:45"), new Date("2015 01 01 "))
// );

console.log(
	differenceInWords(
		new Date("2020 11 19 23:51:02"),
		new Date("2019 01 23 23:59:09")
	)
);

// console.log(
// 	differenceInYears(new Date("2005 06 23 10:00:45"), new Date("2015 01 01 "))
// );

// console.log(
// 	differenceInBusinessDays(new Date("2019 01 31"), new Date("2019 02 28 "))
// );

// console.log(
// 	isPast(new Date("2020 11 19 23:51:02"), new Date("2020 11 19 23:51:01"))
// );
// console.log(
// 	isFuture(new Date("2020 11 19 23:51:02"), new Date("2020 11 19 23:51:03"))
// );

// console.log(isDate(undefined));
// console.log(isValid(null));
