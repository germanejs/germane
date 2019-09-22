# Day of Week Calculation

The day of week for germane function is calculated using the zeller's congruence. Algorithm is explained below.

## Algorithm (Zeller's congruence)

h = **(q + [13(m + 1) / 5] + y + [y/4] - [y/100] + [y/400] + 5) mod 7**

- y = year (year - 1 for January and February).
  or

h = **(q + [13(m + 1) / 5] + K + [K/4] + [J/4)] + 5J) mod 7**

### Where

- h is the day of the week (**0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday**).
- q is the day of the month.
- m is the month (**3 = March, 4 = April, 5 = May, ..., 14 = February**).
- K the year of the century (**year mod 100**).
- J is the zero-based century (actually **year / 100**) For example, the zerobased centuries for 1995 and 2000 are 19 and 20 respectively (to not be confused with the common ordinal century enumeration which indicates 20th for both cases).
- [...] is the floor function or integer part.
- mod is the modulo operation or remainder after division.

- NOTE:
  In this algorithm January and February are counted as months 13 and 14
  of the previous year. E.g. if it is 2 February 2010, the algorithm counts the date as the second day of the fourteenth month of 2009 (02/14/2009 in DD/MM/YYYY format)
  For an ISO week date Day-of-Week d (1 = Monday to 7 = Sunday), use
  d = ((h + 5) mod 7) + 1.

## Analysis

see [Zeller's-congruence](https://en.m.wikipedia.org/wiki/Zeller%27s_congruence).
