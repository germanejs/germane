# Calculating the Difference Between Dates

## Methods (Goes opposite for Negative dates)

### Year

- subtract the starting year from the ending year, subtract one from the result if the ending month is _less_ than the starting month, else return the result.

### Month

- subtract the starting month from 12, add the ending month (**if the ending day of month is less than the starting day of month, subtract 1 from the ending month.**) and mod the result by 12.
- for a same year range, subtract the starting month from the end month. subtract 1 is the starting day of month is greater than the ending day of month.

### Day Of Month

- if the ending day of month is greater or equal to the starting day of month, subtract the starting day of month from the ending day of month.
- else subtract the starting day of month from the last day of its previous month and add the ending day of month. **if the starting day of month is the last day in its month, return the ending day of month**.

### Special Cases

- (SC1) February: From _29 - 31 Jan_ if ending year is a leap year or 28 for common years to _Feb 28 or 29_ in leap years is a month.
- (SC2) From 29 days february to a 28 days february is 1 month
- (SC3) 31 Days months: from a 31 days months to the end of 30 or (29 || 28) days monnth is 1 month.

## Example

```js
const startM = 4;
const endM = 8;
const startDofM = 23;
const endDofM = 12;
const startYear = 2019;
const endYear = 2020;

// for different year dates
const differentYear =
  endDofM >= startDofM
    ? (12 - startM + endM) % 12
    : (12 - startM + endM - 1) % 12;

// for same year
const sameYear =
  endDofM >= startDofM ? endM - startM : (endM - startM - 1) % 12;

const month = startYear === endYear ? sameYear : differentYear; // => 3;

const totalDays =
  endDofM >= startDofM
    ? endDofM - startDofM
    : isLastDay(startDofM, startM)
    ? endDofM
    : lastDayOfPrevMonth(startM) - startDofM + endDofM; //=> 20

const y = endYear - startYear;

const year =
  endM < startM || (endM === startM && startDofM > endDofM) ? y - 1 : y; // => 1

const weeks = Math.floor(totalDays / 7);
const days = Math.floor(totalDays % 7);
```

- IF SC1 || SC2 IS TRUE, TOTALDAYS SHOULD RETURN ZERO.

- IF SC3 IS TRUE ADD (TOTALDAYS + (TOTALDAYS % TOTALDAYS IN ENDING MONTH)).

- IF ANY SPECIAL CASE RETURNS TRUE ADD (MONTH + (TOTALDAYS / TOTALDAYS IN ENDING MONTH).
