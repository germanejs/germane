/**
 * @author Simeon Akpanudo
 * @fileoverview Returns boolean values checking whether dates are same or not (not including time)
 */

"use strict";

/**
 *
 * @param {Date} dateOne First date
 * @param {Date} dateTwo Second date
 * @returns {Boolean} true if dates are same and false if date are not equal.
 */
function isSameDate(dateOne, dateTwo) {
	const yOne = dateOne.getFullYear(),
		mOne = dateOne.getMonth() + 1,
		dOne = dateOne.getDate(),
		yTwo = dateTwo.getFullYear(),
		mTwo = dateTwo.getMonth() + 1,
		dTwo = dateTwo.getDate();

	const newDOne = new Date(`${yOne} ${mOne} ${dOne}`).getTime();
	const newDTwo = new Date(`${yTwo} ${mTwo} ${dTwo}`).getTime();

	return newDOne === newDTwo;
}

module.exports = isSameDate;
