const evalTimestamp = require("../../../lib/utils/evaluations/evalTimestamp");
const { absCeil } = require("../../../lib/utils/roundingMethods");

describe("evalTimestamp, parses a timestamp into date and time units", () => {
	test("should return an object of date and time", () => {
		const x = {
			hours: 11,
			minutes: 32,
			seconds: 52,
			totalHours: 3203,
			totalMinutes: 192212,
			totalSeconds: 11532772,
			totalMilliseconds: 11532772782,
			totalWeeks: 19
		};
		expect(evalTimestamp(11532772782)).toStrictEqual(x);
	});

	test("should return an object of date and time", () => {
		const x = {
			hours: 12,
			minutes: 33,
			seconds: 53,
			totalHours: 3204,
			totalMinutes: 192213,
			totalSeconds: 11532773,
			totalMilliseconds: 11532772782,
			totalWeeks: 20
		};
		expect(evalTimestamp(11532772782, absCeil)).toStrictEqual(x);
	});

	test("should return an object of date and time", () => {
		const x = {
			hours: 11,
			minutes: 32,
			seconds: 52,
			totalHours: 3203,
			totalMinutes: 192212,
			totalSeconds: 11532772,
			totalMilliseconds: 11532772782,
			totalWeeks: 19
		};
		expect(evalTimestamp(11532772782, Math.floor)).toStrictEqual(x);
	});
});
