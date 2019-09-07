const inRange = require("../lib/inRange");

test("should return false", () => {
	expect(
		inRange(Date.now(), new Date("2019 09 09"), new Date("2020 12 12"))
	).toBe(false);
});

test("should return true", () => {
	expect(
		inRange(new Date("2019 09 09"), Date.now(), new Date("2020 12 12"))
	).toBe(true);
});
test("should return true", () => {
	expect(inRange(new Date("2019 09 09"), Date.now(), Date.now() * 20)).toBe(
		true
	);
});

test("should throw an error", () => {
	expect(() => {
		inRange(
			new Date("2019 09 09"),
			Date.now().toString(3),
			new Date("2020 12 12")
		);
	}).toThrow(
		/Expected range, start and end arguments to be a date object or a timestamp/
	);
});

test("should throw an error", () => {
	expect(() => {
		inRange(new Date("2019 09 09"), Date.now(), new Date("20201212"));
	}).toThrow(/Invalid Date/);
});
