# Leap Year Rule

Explains the use of 365.25 or 365.24425 or simple 365.24 as the total number of days in a year.

# Explanation

## Correction from the Julian calendar to the Gregorian calendar.

1. adding a leap year add every 4 years adds 1/4 to the 365 day or increases the average year length by 0.25 days

2. omitting a leap year every 100 years subtracts 1/100 = 0.01 days from the 365 days.

3. adding a leap year every 400 years add 1/400 = 0.0025 days to the add day year,

4. omitting a leap year every 4000 thousands years subtracts 1/4000 = 0.00025 from the 365 days year.

when combined the correctness average year-length is:

```javascript
year = 365 + 0.25 - 0.01 + 0.0025 - 0.00025; // => 365.24225 (days/year).
```

**Note**
_. A 4-year cycle has an extra leap day.
_. Similarly, a 400-year cycle has an extra leap day.
\*. OTOH, a 100-year cycle has one fewer leap day.
