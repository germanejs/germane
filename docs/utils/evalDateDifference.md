# EXPLANATIONS ON HOW THE DIFFERENCE BETWEEN DATES ARE CALCULATED.

### Please note the following.
1. From a given date in a month, to same given date is a month
_The number of days may vary depending on whether the month has 30 days or 31 days and in 29 0r 28 for february._
2. from the end of one month to the end of another is 1 month or the equivalent, not putting into considerations months that are 30 or 31 days
3. In negative dates (that is going to past dates from a more future dates), from the end of a 30 day month to the end of a 31 day month is more or greater than a month (1 month and 1 day).

4. In negative dates (between a one year range _(eg. 2019 02 28 - 2019 01 30)_, from the end of february to january 30, 31, 29 or 28 is 1 month.

5. Of any given day in february to another same day in another month, equals a month or equivalent, even if it number of days might be 28 or equivalent in leap years.

6. There are many approach to solving these problem, these might not be the best 😁

7. Please do not believe everything you read here. try to read the code at [evalDateDifference.js] for a better understanding and possibly find bugs.

## IN CALCULATING WEEKS AND DAYS.

### INSTANCE ONE: Positive Date, considering what is said above from a given day in a month, to the same day in another month equals 1 month, or equivalent. for some instance from a given day in a month, to another given day in another month, may be more than 1 or equivalent (_depending on given months_) month or less.

1. INCASE WHERE THE DAYS ARE NOT UP TO A MONTH. (_meaning that the second day of month is less than the first days of month_) AND THE DAY OF MONTH FOR THE FIRST MONTH IS NOT THE LAST DAY OF THE MONTH ?.

    method
    **The day of month of the first month, is subtracted from the total days in the previous month of the second month then the day of month of the second month is added**
    *example*
    ```javascript
    const firstDate = new Date("2013 03 23")// March[3], 23, 2013.
    const totalDaysInFirstMonth = 31 // (March has 31 days);
    const firstDOfMonth = 23.
    const secondDate = new Date("2013 06 22") // June[6], 22, 2013.
    const totalDaysInSecondMonth = 30 // (June has 30 days);
    const secondDOfMonth = 22.
    const totalDaysOfPrevMonth = 31 // (previous month for the second month is May).


    let totalDays = (totalDaysOfPrevMonth - firstDOfMonth) + secondDOfMonth;
    //NB: if the first month is january (in which case its previous month will be 0), use its total days instead
    const weeks = Math.floor(totalDays / 7) = 4.
    const remainingDays = Math.floor(totalDays % 7) = 2.
    // 4 weeks, 2 days.
    ```

    > Note the calculations above does not affect first dates, whose  day of month is its last, seconds date in case of negative years.

2. INCASE WHERE THE DAYS ARE MORE THAN A MONTH.

    i. IF THE DAY OF MONTH OF THE FIRST DATE IS ITS LAST AND THE DIFFERENCE BETWEEN ITS FIRST DAY OF MONTH TO ITS SECOND DAY OF MONTH IS EQUAL OR GREATER THAN THE TOTAL DAYS IN THE FIRST MONTH ? 

    method
    **subtract the first day of month from the total days in the first month and add the day of month of the second month, then minus the total days of first month.**

    > using the given date above 
    ```javascript
    // in positive dates.
    let totalDays = (totalDaysInFirstMonth - firstDOfMonth + secondDOfMonth) - totalDaysInFirstMonth

    // in negative date.
    let totalDays = (totalDaysInSecondMonth - secondDOfMonth + firstDOfMonth) - totalDaysInSecondMonth
    const totaldays = (31 - 23 +  22) - 31
    ```

    ii. IF THE DAY OF MONTH OF THE FIRST DATE IS NOT ITS LAST AND THE DIFFERENCE BETWEEN ITS FIRST DAY OF MONTH TO ITS SECOND DAY OF MONTH IS IS NOT EQUAL OR GREATER THAN THE TOTAL DAYS IN THE FIRST MONTH ?.
    method
    **simply subtract the first day of month from the total days in the first month and add the day of month of the second month.**

3. INCASE WHERE ALL OF THE CONDITIONS STATED ABOVE FAILS?
    method
    **simply use the dateDifference.**
    eg. secondDOfMonth - firstDOfMonth.

### INSTANCE TWO: Negative Date, please the read conditions at the beginning of the these file..
 1. All method stated above remains valid except the opposite values are being used.
 2. First month, dates or what-a-view are used in the place of the second, and vice-versa.
please refer to the [evalDateDifference.js] file to see how its is being used.


To get the total weeks divide the total by 7 and floor it.
To get the total remaining days after weeks mod the total days by 7 ad floor it.

## CALCULATING YEARS

Years are derived from the total days after the difference between the have been calculated.
Years are calculated by dividing  the total days by  365.25 (_putting cosidering both common years and leap years_).
below is how the value 365.25 is derived.
correction from the julian calendar to the gregorian calendar
* adding a leap year add every 4 years adds 1/4 to the 365 day or increases the average year length by 0.25days
* omitting a leap year every 100 years subtracts 1/100 = 0.01 days from the 365 days
* adding a leap year every 400 years add 1/400 = 0.0025 days to the add day year
* omitting a leap year every 4000 thousands years subtracts 1/4000 = 0.00025from the 365 days year.
	
when combined the correctness average year-length  is:
```javascript
// C = correct year.
const C =  365 + 0.25 - 0.01 + 0.0025 - 0.00025 // = 365.24225 days/year

const year = Math.floor(totalDays / C);
```

## CALCULATING MONTHS

Months are derived using a range function, the range function returns the total steps from a starting number to another (ending) number.



