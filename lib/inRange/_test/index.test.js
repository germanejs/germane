const inRange = require("../index");

test("should return false", () => {
  expect(inRange(new Date("2019 09 01"), new Date("2019 09 09"), new Date("2020 12 12"))).toBe(
    false,
  );

  expect(inRange(new Date("2019 01 01"), new Date("2019 02 09"), new Date("2019 01 12"))).toBe(
    false,
  );
});

test("should return true", () => {
  expect(inRange(new Date("2019 09 09"), new Date("2019 05 30"), new Date("2020 12 12"))).toBe(
    true,
  );
});
test("should return true", () => {
  expect(inRange(new Date("2019 09 09"), new Date("2005 11 15"), new Date("2019 09 19"))).toBe(
    true,
  );
});

test("should return an error", () => {
  expect(
    inRange(new Date("2019 09 09"), Date.now().toString(3), new Date("2020 12 12")),
  ).toStrictEqual(
    new TypeError(
      "Expected range, relative, start and end arguments to be a date object or a timestamp",
    ),
  );
});

test("should return an error", () => {
  expect(inRange(new Date("2019 09 09"), Date.now(), new Date("20201212"))).toStrictEqual(
    new RangeError("Invalid Date"),
  );
});
