const getFullYear = require("../../../lib/utils/evaluations/getFullYear");

describe('A lookup object for the total days in a month', () => {
    test('should return an object of the days in each 12 month of a year', () => {
        expect(getFullYear(2019)).toStrictEqual({
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        });

        expect(getFullYear(1980)).toStrictEqual({
            1: 31,
            2: 29,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        })
    })




})