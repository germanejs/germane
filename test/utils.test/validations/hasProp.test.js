const hasProp = require("../../../lib/utils/validations/hasProp");

describe("Checks whether an object has a property in it, returns false or true", () => {
	test("should return true", () => {
		expect(
			hasProp(
				{
					foo: "bar",
					bar: "foo",
					int: 4,
					float: 4.092,
					bool: false,
					primitive: null
				},
				"foo"
			)
		).toBe(true);
		expect(
			hasProp(
				{
					foo: "bar",
					bar: "foo",
					int: 4,
					float: 4.092,
					bool: false,
					primitive: null
				},
				"primitive"
			)
		).toBe(true);
		expect(
			hasProp(
				{
					foo: "bar",
					bar: "foo",
					int: 4,
					float: 4.092,
					bool: false,
					primitive: null
				},
				"float"
			)
		).toBe(true);
	});

	test("should return false", () => {
		expect(
			hasProp(
				{
					foo: "bar",
					bar: "foo",
					int: 4,
					float: 4.092,
					bool: false,
					primitive: null
				},
				"foobar"
			)
		).toBe(false);
		expect(
			hasProp(
				{
					foo: "bar",
					bar: "foo",
					int: 4,
					float: 4.092,
					bool: false,
					primitive: null
				},
				"baz"
			)
		).toBe(false);
		expect(
			hasProp(
				{
					foo: "bar",
					bar: "foo",
					int: 4,
					float: 4.092,
					bool: false,
					primitive: null
				},
				"bars"
			)
		).toBe(false);
	});
});
