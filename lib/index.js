const strftime = require("./strftime");
const format = require("./format");
const isBusinessDay = require("./isBusinessDay");
const getBusinessDays = require("./getBusinessDays");
const isWeekend = require("./isWeekend");
const isSameDay = require("./isSameDay");
const isNextDay = require("./isNextDay");
const isYesterday = require("./isYesterday");
const isLastWeek = require("./isLastWeek");
const isSameWeek = require("./isSameWeek");
const difference = require("./_util/evaluations/difference");
const endOfWeek = require("./endOfWeek");
const endOfHour = require("./endOfHour");
const endOfDay = require("./endOfDay");
const endOfMinute = require("./endOfMinute");
const endOfQuarter = require("./endOfQuarter");
const endOfMonth = require("./endOfMonth");
const endOfYear = require("./endOfYear");
const endOfDecade = require("./endOfDecade");
const startOfDay = require("./startOfDay");
const startOfHour = require("./startOfHour");
const startOfMinute = require("./startOfMinute");
const startOfWeek = require("./startOfWeek");
const startOfMonth = require("./startOfMonth");
const startOfQuarter = require("./startOfQuarter");
const startOfYear = require("./startOfYear");
const differenceInWords = require("./differenceInWords");
const differenceInHours = require("./differenceInHours");
const differenceInMilliseconds = require("./differenceInMilliseconds");
const differenceInMinutes = require("./differenceInMinutes");
const differenceInSeconds = require("./differenceInSeconds");
const differenceInWeeks = require("./differenceInWeeks");
const differenceInDays = require("./differenceInDays");
const differenceInMonths = require("./differenceInMonths");
const differenceInYears = require("./differenceInYears");
const differenceInBusinessDays = require("./differenceInBusinessDays");
const isBefore = require("./isBefore");
const isFuture = require("./isFuture");
const isDate = require("./isDate");
const isValid = require("./isValid");
const add = require("./add");
const sub = require("./subtract");
const min = require("./min");
const max = require("./max");
const toArray = require("./toArray");
const germane = require("./germane");
const formatRelative = require("./formatRelative");
const relativeDistance = require("./relativeDistance");
const toObject = require("./toObject");
const fromRange = require("./fromRange");
const filterBy = require("./filterBy");
const isSunday = require("./isSunday");
const isMonday = require("./isMonday");
const isTuesday = require("./isTuesday");
const isWednesday = require("./isWednesday");
const isThursday = require("./isThursday");
const isFriday = require("./isFriday");
const isSaturday = require("./isSaturday");
const isDST = require("./isDST");
const closestTo = require("./closestTo");
const isAfter = require("./isAfter");
const timer = require("./timer");
const createDuration = require("./createDuration");
const us = require("./locale/en_US");
const fr = require("./locale/fr");
const yo = require("./locale/yo");
const es = require("./locale/es");
const de = require("./locale/de");
const af = require("./locale/af");
const pt = require("./locale/pt");
const nl = require("./locale/nl");
const enGB = require("./locale/en_GB");
const it = require("./locale/it");
const lv = require("./locale/lv");

// console.log(
//   closestTo(new Date("2019-11-09T14:09:27.099"), [
//     new Date("2019-11-09T15:00:00.999Z"),
//     new Date("2019-11-09T14:09:27.100"),
//     new Date("2019-11-09T14:09:27.099"),
//   ]),
// );

// console.log(
//   format(germane(undefined, undefined, { locale: fr }), "TT BBBB", {
//     locale: yo,
//   }),
// );
// console.log(isSameWeek(germane("2012-09-15", "UTC"), germane("2012-09-09", "UTC")));
// console.table({
//   fr: formatRelative(new Date("2019-11-02 17:23"), new Date("2019-11-06 23:23"), { locale: fr }),
//   enUS: formatRelative(new Date("2019-11-02 17:23"), new Date("2019-11-01 19:56"), { locale: us }),
//   de: formatRelative(new Date("2019-11-02 17:23"), new Date("2019-11-01 11:16"), { locale: de }),
//   es: formatRelative(new Date("2019-11-02 17:23"), new Date("2019-11-03 01:45"), { locale: es }),
//   yo: formatRelative(new Date("2019-11-02 17:23"), new Date("2019-11-02 11:05"), { locale: yo }),
//   af: formatRelative(new Date("2019-11-01 17:23"), new Date("2019-11-04 12:11"), { locale: af }),
//   pt: formatRelative(new Date("2019-11-01 17:23"), new Date("2019-11-04 12:11"), { locale: pt }),
//   nl: formatRelative(new Date("2019-11-01 17:23"), new Date("2019-11-01 08:11"), { locale: nl }),
//   enGB: formatRelative(new Date("2019-11-01 17:23"), new Date("2019-11-07 19:11"), {
//     locale: enGB,
//   }),
//   it: formatRelative(new Date("2019-11-01 17:23"), new Date("2019-10-28 02:56:11"), {
//     locale: it,
//   }),
//   lv: formatRelative(new Date("2019-11-01 17:23"), new Date("2019-10-28 02:56:11"), {
//     locale: lv,
//   }),
// });
// console.log(
//   format(germane("1980-06-30 19:23:00"), "'Fo EEEE of the Lo month in yyyy'", { locale: locale }),
// );
// console.log(isDST(germane("2019-05-11 23:11:09", "America/santiago")));
// console.log(strftime(germane(Date.now(), "Antarctica/South_Pole"), "%c", { locale: es }));
// console.log(format(new Date("2019-10-27 19:00:00Z"), "EEE, do of MMMM YYYY, hh:mm:ss a zz"));
// console.table({
//   Locale: "Translations",
//   enUS: format(germane(), "PPP TT BBBB", { locale: us }),
//   fr: format(germane(), "PPP TT BBBB do", { locale: fr }),
//   yo: format(germane(), "PPP TT BBBB", { locale: yo }),
//   es: format(germane(), "PPP TT BBBB", { locale: es }),
//   de: format(germane(), "PPP TT BBBB", { locale: de }),
//   af: format(germane(), "PPP TT BBBB", { locale: af }),
//   pt: format(germane(), "PPP TT BBBB", { locale: pt }),
//   nl: format(germane(), "PPP TT BBBB", { locale: nl }),
//   enGB: format(germane(), "PPP TT BBBB", { locale: enGB }),
//   it: format(germane(), "PPP TT BBBB", { locale: it }),
//   lv: format(germane(), "PPP TT BBBB", { locale: lv }),
// });
// const gwd = getBusinessDays(new Date("2019-09-05"), new Date("2019-09-21"));

// console.log(gwd.map(a => format(a, "ppp", { locale: yo })));
// console.log(isBusinessDay(germane("2019-09-02 17:07:23")));
// console.log(isWeekend(germane("2019-09-21 02:07:23", "America/Caracas")));
// console.log(isToday(germane(Date.now())));
// console.log(
//   isSameDay(new Date("2019-08-28 00:11:11Z"), germane("2019-08-28 23:11:11Z", "Asia/Pyongyang")),
// );
// console.log(isNextDay(new Date("2019 01 24"), germane("2019-01-23")));
// console.log(
//   isYesterday(germane("2019-01-19T23:11:56.999Z", "America/Caracas"), new Date("2019-01-21")),
// );
// console.log(isLastWeek(new Date("2019 01 01"), germane("2018-12-29")));
// console.log(isSameWeek(germane("2019-12-31", "UTC"), germane("2020-02-23", "UTC")));
// console.log(difference(new Date("2019 02 04"), new Date("2019 01 10")));

console.log(endOfMonth(new Date("2098-03-01T09:09:27.091Z")).toString());
// console.log(
//   format(germane(new Date("2019-10-31 23:11Z")), "locale: {eeee, e},  originale: {EEEE, c}", {
//     locale: de,
//   }),
// );
// console.log(
//   relativeDistance(new Date(), new Date(Date.now() + Math.random() * 10 * 1000), {
//     locale: af,
//     addSuffix: true,
//   }),
// );
// console.log(endOfMonth(germane("2013-09-09 12:34:12Z", "America/Los_Angeles")).toISOString());
// console.log(germane("2019-11-11 23:19").getUTCHours());
// console.log(
//   formatRelative(
//     germane("2014-08-20 12:11Z", "Europe/Minsk"),
//     germane("2014-08-22 00:01:00", "Europe/Minsk"),
//   ),
// );

// console.log(endOfMonth(new Date("2019-11-23 23:23:19Z")));
// console.log(endOfMinute(Date.now()));
// console.log(format(endOfQuarter(new Date("1990 12 31 14:56:11")), "pppp XXXXX"));
// console.log(strftime(startOfQuarter(new Date("2019-08-20 13:12:34")), "%c"));
// // console.log(endOfToday());
// console.log(format(endOfYear(new Date("2019-08-20")), "eeee, MMMM do, yyyy TTT"));
// console.log(strftime(startOfDay(new Date("1800-09-04 23:12:19Z")), "%x %X", { locale: us }));
// console.log(startOfHour(Date.now()));
// console.log(startOfMinute(Date.now()));
// console.log(startOfWeek(new Date("2019 09 28 17:09:12")));

// console.log(
//   format(
//     startOfMonth(germane("2019-08-10 15:11Z", "Asia/Hong_Kong")),
//     "EEEE, do MMMM YYYY, hh:mm:ss a zzzz",
//     { locale: yo },
//   ),
// );

// console.log(
//   format(startOfQuarter(germane("2900-04-01T00:59:49Z", "America/Los_Angeles")), undefined, {
//     locale: us,
//   }),
// );

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
//   differenceInBusinessDays(new Date("2010 11 19 18:34:52"), new Date("2011 01 23 12:11:09")),
// );
// console.log(differenceInSeconds(new Date("2010 11 19 23:11:02"), new Date("2019 01 23 02:17:09")));
// console.log(isSameDay(new Date("1000-01-01"), germane("1000-01-01 23:49:12Z")));
// console.log(
// 	differenceInWeeks(
// 		new Date("2013 6 3 23:59:59"),
// 		new Date("2011 7 2 23:59:59"),
// 		{ includeTime: false, roundingMethod: "ceil" }
// 	)
// );
// console.log(germane("2013-07-05T11:11:56.456Z", "America/New_York").toString());

// console.log(
//   differenceInDays(germane(67 * 1000 * 86400), germane(122421 * 1000 * 86400), {
//     includeTime: true,
//     roundingMethod: "floor",
//   }),
// );
// console.log(
//   differenceInDays(new Date("2010 11 19 23:11:02"), new Date("2019 01 23 02:17:09"), {
//     includeTime: true,
//   }),
// );
// console.log(germane(Date.now()).toString());
// console.log(format(germane("9999-02-23"), "YYYY MMMM Do"));
// console.log(new Date("9999-02-23 00:00:00Z").toString());

// console.log(
//   differenceInWords(
//     germane("2020-08-20 12:16:59.120Z", "America/New_york"),
//     germane("2021-01-31 23:59:59.999Z", "Antarctica/Palmer"),
//     {
//       locale: de,
//     },
//   ),
// );
// console.log(germane("2098-02-23T11:09:27.091Z", "America/New_York").toString());
// console.log(
//   differenceInWords(new Date("2019-02-04 23:58Z"), new Date("2019-03-08"), { locale: lv }),
// );
// console.log(
// 	differenceInYears(new Date("2005 06 23 10:00:45"), new Date("2015 01 01 "))
// );

// console.log(
// 	differenceInBusinessDays(new Date("2019 01 31"), new Date("2019 02 28 "))
// );

// console.log(
// 	isPast(new Date("2020 11 19 23:51:02"), new Date("2020 11 19 23:51:01"))
// );
// console.log(isFuture(new Date("2020 11 19 23:51:02"), new Date("2020 11 19 23:51:03")));

// console.log(isDate(undefined));
// console.log(isValid(null));

// console.log(
//   add(germane("2007-06-05 00:00:00.00"), {
//     years: 29,
//     months: 999,
//     days: 290,
//     hours: 12,
//     minutes: 9,
//     seconds: 12,
//     ms: 50,
//   }),
// );

// console.log(
//   add(new Date("2007-07-25 03:11:11.900Z"), {
//     years: 29,
//     months: 999,
//     days: 290,
//     hours: 12,
//     minutes: 9,
//     seconds: 12,
//     ms: 50,
//   }),
// );
// console.log(
//   germane(undefined, "Asia/Baku").toString(),
//   Date.now(),
//   germane(undefined, "Asia/Seoul").toString(),
//   germane().getTime(),
// );
// console.log(germane(Date.now()).toString());
// console.log(
//   add(new Date("1991-11-20T10:45:12.000Z"), {
//     years: 45,
//     months: 89,
//     days: 890,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     ms: 650,
//   }),
// );

// console.log(
//   sub(new Date("2022 10 20 23:11:09"), {
//     days: 739,
//     months: 564,
//     years: 371,
//     ms: 566,
//     seconds: 0,
//     hours: Number("0"),
//   }),
// );

// console.log(germane("1921-01-01 00:00:00Z", "America/New_York").toString());
// console.log(germane("1972-12-31 05:59:59.999Z", "Africa/Lome").toString());
// console.log(
//   format(germane(Date.now(), "America/new_york"), "Today is dddd, Do of MMMM YYYY, HH:mm:ss zz"),
// );

// const dateArr = [
//   germane("2019W124"),
//   germane("2019-03-14"),
//   germane("2019-11-11 23:11:11Z"),
//   germane("2019-11-11 23:11:11Z"),
//   germane("2019-11-11"),
//   new Date("1980-11-11"),
//   156789000000,
// ];
// console.log(min(dateArr));
// console.log(max(dateArr));
// console.log(germane("20191113T001200Z").toString());
// console.log(germane("2019-11-13T00:12:00Z").toString());
// console.log(germane("2019-11-13T00:12:00-07:59").toString());
// console.log(germane("/Date(-1546318800000)/").toString());
// console.log(toArray(new Date()));
// console.log(toObject(germane("2012-11-14 12:11")));
// console.log(formatRelative(germane("2019-10-21 23:45"), germane("2019-10-18 15:45")));
// prettier-ignore.
// console.log(
//   filterBy(
//     filterBy(fromRange(new Date("1999-01-01 23:11"), germane("2020-12-01 23:56")), "month", 7),
//     "date",
//     5,
//   ).map(a => format(a, "dddd MMMM DD YYYY")),
// );
// console.log(germane("2019-123").toString());
// console.log(germane(new Date("2019-08-21"), "Asia/pyongyang").toString());
// console.log(germane("2019-W01").toString());
// console.log(germane("2022-01").toString());

// console.table({
//   Sunday: isSunday(new Date("2018-12-09")),
//   Monday: isMonday(new Date("2018-12-09")),
//   Tuesday: isTuesday(new Date("2018-12-09")),
//   Wednesday: isWednesday(germane("2018-12-09")),
//   Thursday: isThursday(germane("2018-12-09")),
//   Friday: isFriday(germane("2018-12-09")),
//   Saturday: isSaturday(germane("2018-12-09")),
//   isBefore: isBefore(
//     germane("2019-01-11T11:09Z", "America/Los_Angeles"),
//     germane("2019-01-11T11:09Z", "America/New_York"),
//   ),
//   isAfter: isAfter(
//     germane("2019-01-11T11:09Z", "America/Los_Angeles"),
//     germane("2019-01-11T11:09Z", "America/New_York"),
//   ),
// });
// console.log(
//   germane("2019-01-11T11:09Z", "America/Los_Angeles").toString(),
//   germane("2019-01-11T11:09Z", "America/New_York").toString(),
// );

const setTimer = timer(createDuration(10, "seconds"));
// => createDuration([new Date(), new Date()], "minute");
// =
//= > timer()
let i = 0;
let g = 3;

setTimer.loop((units, fn) => {
  // fn.stop(true);
  // // fn.pause(i > 5 && i < 10);

  // fn.pause(i <= 5);

  // if (g + i === 4) {
  //   fn.append(0.5);
  // }
  fn.stop(g + i === 36);
  // fn.restart(g + i === 6);
  // if (i === 1) fn.cont();

  // console.log(fn.count);
  console.log(units);
  i += 1;
});

console.log(createDuration([new Date("2019-09-11 23:00"), new Date("2019-09-10 05:00")]));
console.log("Ohh that ☝️ line up there is asynchronous");
